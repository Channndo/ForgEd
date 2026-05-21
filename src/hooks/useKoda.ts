"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  fetchKodaStatus,
  sendKodaChat,
  kodaSummarize,
  kodaExplainQuiz,
  kodaRecommend,
} from "@/lib/koda/api";
import {
  KODA_OFFLINE,
  KODA_OFFLINE_SIGNED_IN,
  KODA_SIGN_IN,
  KODA_WELCOME,
} from "@/lib/koda/config";
import { hasActiveSession } from "@/lib/forged-account/session";
import { useAuth } from "@/components/providers/AuthProvider";
import type {
  KodaChatMessage,
  KodaLearningContext,
  KodaMode,
} from "@/lib/koda/types";

const SESSION_KEY = "forged_koda_session_v1";

function loadSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export function useKoda(initialContext?: KodaLearningContext) {
  const { user, loading: authLoading } = useAuth();
  const [available, setAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [messages, setMessages] = useState<KodaChatMessage[]>([]);
  const [sessionId, setSessionId] = useState("");
  const [statusNote, setStatusNote] = useState("Connecting to KODA…");
  const contextRef = useRef<KodaLearningContext | undefined>(initialContext);

  useEffect(() => {
    contextRef.current = initialContext;
  }, [initialContext]);

  const refreshStatus = useCallback(async () => {
    const st = await fetchKodaStatus();
    const signedIn = Boolean(user) || hasActiveSession();
    const backendUp = st.responded && st.enabled;
    const up =
      backendUp &&
      (st.available || (signedIn && st.requiresSignIn && hasActiveSession()));
    setAvailable(up);
    setStatusNote(
      up
        ? st.degraded
          ? "KODA is connected in limited mode — responses may be slow or fail until the AI host is fully online."
          : "KODA is ready — powered by Omnistrata AI."
        : !signedIn && st.requiresSignIn
          ? KODA_SIGN_IN
          : signedIn && st.detail
            ? st.detail
            : signedIn
              ? KODA_OFFLINE_SIGNED_IN
              : !st.responded
                ? "Could not reach the KODA service. Check your connection and try again."
                : KODA_OFFLINE
    );
    if (up) {
      setMessages((prev) =>
        prev.length === 0 ? [{ role: "assistant", content: KODA_WELCOME }] : prev
      );
    }
  }, [user]);

  useEffect(() => {
    setSessionId(loadSessionId());
  }, []);

  useEffect(() => {
    if (authLoading) return;
    let cancelled = false;
    void (async () => {
      await refreshStatus();
      if (cancelled) return;
    })();
    return () => {
      cancelled = true;
    };
  }, [authLoading, user?.email, refreshStatus]);

  const setContext = useCallback((ctx: KodaLearningContext) => {
    contextRef.current = ctx;
  }, []);

  const send = useCallback(
    async (
      text: string,
      opts?: { mode?: KodaMode; useStream?: boolean }
    ) => {
      const trimmed = text.trim();
      if (!trimmed || loading || !available) return;

      const nextMessages: KodaChatMessage[] = [
        ...messages,
        { role: "user", content: trimmed },
      ];
      setMessages(nextMessages);
      setLoading(true);

      if (opts?.useStream) {
        setStreaming(true);
        let assistant = "";
        setMessages([...nextMessages, { role: "assistant", content: "" }]);

        const res = await sendKodaChat({
          messages: nextMessages,
          mode: opts?.mode ?? "chat",
          context: contextRef.current,
          sessionId,
          stream: true,
          onToken: (chunk) => {
            assistant += chunk;
            setMessages((prev) => {
              const copy = [...prev];
              copy[copy.length - 1] = { role: "assistant", content: assistant };
              return copy;
            });
          },
        });

        setStreaming(false);
        setLoading(false);
        if (!res.ok) {
          setMessages([
            ...nextMessages,
            {
              role: "assistant",
              content: res.error || "Sorry, I could not respond right now.",
            },
          ]);
        } else if (res.data?.sessionId) {
          setSessionId(res.data.sessionId);
          localStorage.setItem(SESSION_KEY, res.data.sessionId);
        }
        return res;
      }

      const res = await sendKodaChat({
        messages: nextMessages,
        mode: opts?.mode ?? "chat",
        context: contextRef.current,
        sessionId,
      });
      setLoading(false);

      if (!res.ok || !res.data?.message) {
        setMessages([
          ...nextMessages,
          {
            role: "assistant",
            content: res.error || "Sorry, I could not respond right now.",
          },
        ]);
        return res;
      }

      if (res.data.sessionId) {
        setSessionId(res.data.sessionId);
        localStorage.setItem(SESSION_KEY, res.data.sessionId);
      }
      setMessages([
        ...nextMessages,
        { role: "assistant", content: res.data.message },
      ]);
      return res;
    },
    [available, loading, messages, sessionId]
  );

  const summarize = useCallback(async () => {
    if (!contextRef.current) return null;
    setLoading(true);
    const summary = await kodaSummarize(contextRef.current);
    setLoading(false);
    return summary;
  }, []);

  const explainQuiz = useCallback(async () => {
    if (!contextRef.current) return null;
    setLoading(true);
    const explanation = await kodaExplainQuiz(contextRef.current);
    setLoading(false);
    return explanation;
  }, []);

  const recommend = useCallback(async () => {
    setLoading(true);
    const result = await kodaRecommend(contextRef.current ?? {});
    setLoading(false);
    return result;
  }, []);

  const reset = useCallback(() => {
    setMessages(available ? [{ role: "assistant", content: KODA_WELCOME }] : []);
  }, [available]);

  return {
    available,
    loading,
    streaming,
    messages,
    statusNote,
    send,
    summarize,
    explainQuiz,
    recommend,
    setContext,
    reset,
    setMessages,
    refreshStatus,
  };
}
