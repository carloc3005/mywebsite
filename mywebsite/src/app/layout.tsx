// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carlofc.com"),
  title: "Carlo Castillo | Associate Cloud Engineer",
  description: "Associate Cloud Engineer and AWS Certified Solutions Architect – Associate. Builds highly available AWS and Azure environments with Terraform, including a multi-cloud failover system with 99.9% uptime.",
  keywords: "Associate Cloud Engineer, Cloud Support, AWS, Azure, Terraform, Docker, CI/CD, AWS Solutions Architect, Python, Computer Science",
  authors: [{ name: "Carlo Castillo" }],
  creator: "Carlo Castillo",
  openGraph: {
    title: "Carlo Castillo | Associate Cloud Engineer",
    description: "AWS Certified Solutions Architect – Associate. Builds highly available AWS and Azure environments with Terraform and CI/CD.",
    type: "website",
    url: "/",
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
