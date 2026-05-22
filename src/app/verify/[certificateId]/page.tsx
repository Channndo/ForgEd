import { VerifyCertificateClient } from "./VerifyCertificateClient";

export function generateStaticParams() {
  return [];
}

export default async function VerifyCertificatePage({
  params,
}: {
  params: Promise<{ certificateId: string }>;
}) {
  const { certificateId } = await params;
  return <VerifyCertificateClient certificateId={certificateId} />;
}
