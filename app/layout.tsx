import "@/app/ui/global.css";
import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: { default: "Acme Dashboard", template: "%s | Acme Dashboard" },
  description: "Next.js Learn course dashboard project (Acme).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
