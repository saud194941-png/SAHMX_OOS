import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAHM X — AI Financial Operating System",
  description: "سهم إكس — منصة مالية ذكية مدعومة بالذكاء الاصطناعي للشركات ورواد الأعمال."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
