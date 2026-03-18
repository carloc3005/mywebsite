// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlo Castillo | Cloud Solution Architect | Web Developer",
  description: "Computer Science graduate and AWS Certified Cloud Practitioner focused on cloud architecture and full-stack web development with modern technologies.",
  keywords: "Cloud Solution Architect, Web Developer, AWS, Full-Stack Developer, Computer Science, React, Node.js, JavaScript, Python",
  authors: [{ name: "Carlo Castillo" }],
  creator: "Carlo Castillo",
  openGraph: {
    title: "Carlo Castillo | Cloud Solution Architect",
    description: "Computer Science graduate and AWS Certified Cloud Practitioner focused on cloud architecture and full-stack web development.",
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
