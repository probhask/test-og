import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/main-logo1.ico",
  },
  title: "Blinkare - Healthcare in Every Pocket",
  description:
    "Healthcare assistant for KaiOS and feature phones. Daily vitals, health reminders, BMI calculator, and more - accessible to everyone.",
  keywords:
    "healthcare, KaiOS, feature phone, health app, daily vitals, BMI calculator, wellness, blinkare",
  authors: [{ name: "Blinkare Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    images: [
      {
        url: "/main-logo1.png",
        alt: "Blinkare",
        width: "300",
        height: "300",
      },
    ],
  },
  twitter: {
    images: ["/main-logo1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
