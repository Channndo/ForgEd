import QRCode from "qrcode";

/** PNG buffer for embedding in PDF certificates. */
export async function generateVerificationQrPng(
  verificationUrl: string,
  size = 140
): Promise<Uint8Array> {
  const dataUrl = await QRCode.toDataURL(verificationUrl, {
    width: size,
    margin: 1,
    color: { dark: "#1a1a1a", light: "#f5f0e6" },
    errorCorrectionLevel: "M",
  });
  const base64 = dataUrl.split(",")[1];
  if (!base64) throw new Error("QR generation failed.");
  return Uint8Array.from(Buffer.from(base64, "base64"));
}
