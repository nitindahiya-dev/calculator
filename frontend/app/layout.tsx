// app/layout.tsx
'use client'; // This line makes this file a client component
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { metadata } from "./metadata"; // Import the metadata

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>{children}</SessionProvider> {/* SessionProvider here */}
      </body>
    </html>
  );
}

// Remove the export statement for metadata
