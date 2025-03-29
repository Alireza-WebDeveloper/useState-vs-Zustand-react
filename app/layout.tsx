import '../app/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import localFont from 'next/font/local';
import { Metadata } from 'next';
const iranSans = localFont({ src: '../public/fonts/iranSans.woff2' });

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranSans.className} bg-gray-100 text-black  
        dark:bg-black dark:text-white capitalize`}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
