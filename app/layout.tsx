import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CarouselCompany } from "./components/carosuel";
import TranslateWidget from "./components/TranslateWidget";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "stayspace",
  description: "stayspace a wonderful solution",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = (await import(`./messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className={`${quicksand.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
       {/*    <div className="bg-gradient-to-r from-white to-gray-600 flex justify-end items-start py-1 md:pr-24">
            <TranslateWidget />
          </div> */}
          <Navbar />
          {children}
         {/*  <CarouselCompany /> */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
