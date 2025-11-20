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
    metadataBase: new URL("https://alexmarshwebsite.com"),
    title: "Alex Marsh - Professional Web Developer based in Buffalo, New York",
    description: "Let me help you build your next website. With over a decade of experience building websites for a wide range of industries, including banking, legal, medical and more, I have a trusted background that can help you take your business to the next level.",
    alternates: {
        canonical: "./",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': "large",
            'max-video-preview': -1,
        },
    },
    openGraph: {
        type: "website",
        url: "https://alexmarshwebsite.com",
        title: "Alex Marsh, Professional Web Developer",
        siteName: "Alex Marsh Website",
        images: [
            {
                url: "/img/screenshot.png",
                width: 1200,
                height: 630,
                alt: "Alex Marsh Website Preview",
            },
        ],
    },
    icons: {
        icon: "/img/logo.svg",
        shortcut: "/img/logo.svg",
        apple: "/img/logo.svg",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
