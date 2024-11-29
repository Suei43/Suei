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
  title: "Portfolio | Folarin Raphael",
  description: "Folarin's personal portfolio",
  applicationName: "Folarin Raphael",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Suei" }],
  creator: "Folarin Raphael",
  publisher: "Folarin Raphael",
  icons: [
    { rel: "icon", url: Favicon.src },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/public/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/public/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      url: "/public/site.webmanifest",
    },
    {
      rel: "icon",
      sizes: "192x192",
      url: "/public/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      sizes: "512x512",
      url: "/public/android-chrome-512x512.png",
    },
  ],
  openGraph: {
    title: "Folarin Raphael",
    description: "Folarin's personal portfolio",
    url: "https://suei.space",
    siteName: "Folarin Raphael",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
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
