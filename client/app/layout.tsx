import React from "react";
import "./globals.css";
import { PT_Sans } from "next/font/google";

const pt_sans = PT_Sans({ weight: "400", subsets: ["latin"] });
// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pt_sans.className}>{children}</body>
    </html>
  );
}
