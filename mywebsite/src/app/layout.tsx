// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlo Castillo | IT Support Specialist | Full-Stack Developer",
  description: "Computer Science graduate passionate about solving technical problems and supporting users in modern technology environments. Skilled in full-stack development with React, Node.js, and modern web technologies.",
  keywords: "IT Support, Full-Stack Developer, Computer Science, React, Node.js, JavaScript, Python, Technical Support",
  authors: [{ name: "Carlo Castillo" }],
  creator: "Carlo Castillo",
  openGraph: {
    title: "Carlo Castillo | IT Support Specialist",
    description: "Computer Science graduate passionate about solving technical problems and supporting users in modern technology environments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
