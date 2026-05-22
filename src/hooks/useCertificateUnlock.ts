"use client";

import { useCallback, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { issueCertificateClient } from "@/lib/certificates/client";
import type { CertificateRecord } from "@/lib/certificates/types";
import { hasActiveSession } from "@/lib/forged-account/session";

export function useCertificateUnlock() {
  const { profile, user } = useAuth();
  const [certificate, setCertificate] = useState<CertificateRecord | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [issuing, setIssuing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const issueOnCourseComplete = useCallback(
    async (input: {
      courseSlug: string;
      examScore: number;
      examTotal: number;
    }) => {
      setError(null);
      const studentName =
        profile?.displayName?.trim() ||
        [profile?.firstName, profile?.lastName].filter(Boolean).join(" ") ||
        profile?.username ||
        "ForgEd Learner";

      if (!hasActiveSession()) {
        setError("Sign in to save and download your official certificate.");
        setModalOpen(true);
        return;
      }

      setIssuing(true);
      try {
        const res = await issueCertificateClient({
          courseSlug: input.courseSlug,
          studentName,
          examScore: input.examScore,
          examTotal: input.examTotal,
        });
        if (res.ok && res.certificate) {
          setCertificate(res.certificate);
          setModalOpen(true);
        } else {
          setError(res.error || "Could not issue certificate.");
          setModalOpen(true);
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : "Certificate unavailable.");
        setModalOpen(true);
      } finally {
        setIssuing(false);
      }
    },
    [profile, user]
  );

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return {
    certificate,
    modalOpen,
    issuing,
    error,
    issueOnCourseComplete,
    closeModal,
    setModalOpen,
    setCertificate,
  };
}
