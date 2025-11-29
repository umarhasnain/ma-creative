import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MA Creative | Graphic Designer",
  description: "Showcasing creative web, branding, and UI/UX design projects by a professional designer.",
  keywords: "Portfolio, Web Design, Branding, UI/UX Design, Creative Designer, Graphic Design, Muhammad Ahsan, Social Media, UI Design, UX Design, Social Post Design, MA Creative",
  authors: [{ name: "Muhammad Ahsan", url: "https://ma-creative.vercel.app/" }],
  creator: "Muhammad Ahsan",
  publisher: "Muhammad Ahsan",
  openGraph: {
    type: "website",
    title: "MA Creative | Graphic Designer",
    description: "Showcasing creative web, branding, and UI/UX design projects by a professional designer.",
    url: "https://ma-creative.vercel.app/",
    siteName: "Muhammad Ahsan",
    images: [
      {
        url: "/images/image_0.png",
        width: 1200,
        height: 630,
        alt: "MA Creative | Graphic Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MA Creative | Graphic Designer",
    description: "Showcasing creative web, branding, and UI/UX design projects by a professional designer.",
    images: ["/images/image_0.png"],
    creator: "@yourtwitterhandle",
  },
  alternates: {
    canonical: "https://ma-creative.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="EVKLEb62GcPN4ZuWrmHI7gS2z429ER6C-hUZymS8dXI" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 overflow-x-hidden`}
      >
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="pt-24 max-w-full overflow-x-hidden">{children}</main>

        {/* Footer */}
        <Footer />


      </body>
    </html>
  );
}
