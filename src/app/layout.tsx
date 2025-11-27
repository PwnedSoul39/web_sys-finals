import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { HeroSection1 } from "~/components/pro-blocks/landing-page/hero-sections/hero-section-1";
import { BlogSection1 } from "~/components/pro-blocks/landing-page/blog-sections/blog-section-1";
import { LpNavbar1 } from "~/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "~/components/pro-blocks/landing-page/footers/footer-1";

export const metadata: Metadata = {
  title: "Test Site",
  description: "Website Description",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <LpNavbar1 />
        <BlogSection1 />
        <HeroSection1 />
        <Footer1 />
      </body>
    </html>
  );
}
