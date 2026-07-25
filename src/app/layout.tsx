import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "300",
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rahul Chitkara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
