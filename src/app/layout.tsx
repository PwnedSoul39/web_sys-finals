import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { PricingSection1 } from "~/components/pro-blocks/landing-page/pricing-sections/pricing-section-1";
import { BlogSection1 } from "~/components/pro-blocks/landing-page/blog-sections/blog-section-1";
import { LpNavbar1 } from "~/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "~/components/pro-blocks/landing-page/footers/footer-1";
import { ContactSection1 } from "~/components/pro-blocks/landing-page/contact-sections/contact-section-1";
import { LogoSection1 } from "~/components/pro-blocks/landing-page/logo-sections/logo-section-1";

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
        <LogoSection1 />
        <hr />
        <BlogSection1 />
        <hr />
        <PricingSection1 />
        <hr />
        <ContactSection1 />
        <Footer1 />
      </body>
    </html>
  );
}
