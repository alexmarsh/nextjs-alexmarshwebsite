// src/app/layout.tsx

import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/_global.scss";

import { Kaushan_Script, Open_Sans } from "next/font/google";

const kaushanScript = Kaushan_Script({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-kaushan",
});

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    variable: "--font-open-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Alex Marsh - Professional Web Developer based in Buffalo, New York",
    description: "Let me help you build your next website. With over a decade of experience building websites for a wide range of industries, including banking, legal, medical and more, I have a trusted background that can help you take your business to the next level.",
    icons: {
        icon: "/img/logo.svg", // used for favicon
        shortcut: "/img/logo.svg", // used for shortcut icon (optional)
        apple: "/img/logo.svg", // used for iOS
    },
};

export default async function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${openSans.variable} ${kaushanScript.variable}`}>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
            <body className="body">
                <a className="skip-link sr-only" href="#site-main">Skip to content</a>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
