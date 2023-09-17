import "./globals.css";
import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import Favicon from "/public/favicon.ico";

const chakra = Chakra_Petch({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Folarin Raphael",
  description: "Folarin's personal portfolio",
  applicationName: "Folarin Raphael",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Suei" }],
  creator: "Folarin Raphael",
  publisher: "Folarin Raphael",
  icons: [{ rel: "icon", url: Favicon.src }],
  openGraph: {
    title: "Folarin Raphael",
    description: "Folarin's personal portfolio",
    url: "https://suei.space",
    siteName: "Folarin Raphael",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={chakra.className}>{children}</body>
    </html>
  );
}
