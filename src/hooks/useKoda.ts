"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  fetchKodaStatus,
  sendKodaChat,
  kodaSummarize,
  kodaExplainQuiz,
  kodaRecommend,
} from "@/lib/koda/api";
import { KODA_OFFLINE, KODA_WELCOME } from "@/lib/koda/config";
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

  useEffect(() => {
    setSessionId(loadSessionId());
    let cancelled = false;
    (async () => {
      const st = await fetchKodaStatus();
      if (cancelled) return;
      const up = st.responded && st.enabled && st.available;
      setAvailable(up);
      setStatusNote(
        up
          ? "KODA is ready — powered by Omnistrata AI."
          : st.responded
            ? KODA_OFFLINE
            : KODA_OFFLINE
      );
      if (up) {
        setMessages([{ role: "assistant", content: KODA_WELCOME }]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

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
  };
}
