// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlo Castillo | Cloud Engineer",
  description: "Computer Science graduate and AWS Certified Solutions Architect – Associate focused on cloud infrastructure, automation, and full-stack development.",
  keywords: "Cloud Engineer, AWS, Solutions Architect, DevOps, Full-Stack Developer, Computer Science, React, Node.js, JavaScript, Python",
  authors: [{ name: "Carlo Castillo" }],
  creator: "Carlo Castillo",
  openGraph: {
    title: "Carlo Castillo | Cloud Engineer",
    description: "Computer Science graduate and AWS Certified Solutions Architect – Associate focused on cloud infrastructure and automation.",
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
