import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({weight: ['100', '200', '300', '400', '500', '600', '700', '800'], subsets: ['latin']})


export const metadata: Metadata = {
  title: "BeFound, Online, design, marketing...",
  description: "BeFound is a creative studio specialising in the online world. We deal with SEO, websites, apps, design and system programming...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
