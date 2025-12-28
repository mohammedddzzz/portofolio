import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Mohammed Al-Zarei | Web Developer Portfolio",
  description:
    "Portfolio and CV for Mohammed Al-Zarei covering web development skills, technical experience, and education.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Mohammed Al-Zarei | Web Developer Portfolio",
    description:
      "Explore Mohammed Al-Zarei’s projects, technical experience, and education.",
    url: "/",
    siteName: "Mohammed Al-Zarei Portfolio",
    images: [
      {
        url: "/background.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Al-Zarei portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Al-Zarei | Web Developer Portfolio",
    description:
      "Explore Mohammed Al-Zarei’s projects, technical experience, and education.",
    images: ["/background.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-100" >
     
      <body 
        className={`${geistSans.variable} ${geistMono.variable} h-full`}
      >
        
       
        {children}
     
       
        
     
      </body>
      
      
    </html>
  );
}
