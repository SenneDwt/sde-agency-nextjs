import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SDE Agency - Websites die aandacht trekken. Meta Ads die presteren.",
  description: "Wij bouwen moderne websites en zorgen voor advertentiecampagnes die jouw omzet laten groeien. Websiteontwikkeling, Meta Ads en meer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        {/* Cookiebot */}
        <script 
          id="Cookiebot" 
          src="https://consent.cookiebot.com/uc.js" 
          data-cbid="c4718494-9b1c-4ca2-9c50-a1c2678aa33a" 
          type="text/javascript"
          async
        />
        
        {/* Google Consent Mode - Default State */}
        <script
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('consent', 'default', {
  'ad_personalization': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'analytics_storage': 'denied',
  'functionality_storage': 'denied',
  'personalization_storage': 'denied',
  'security_storage': 'granted',
  'wait_for_update': 500,
});
gtag("set", "ads_data_redaction", true);
gtag("set", "url_passthrough", false);
            `,
          }}
        />
        
        {/* Google Tag Manager - geblokkeerd tot cookie toestemming */}
        <script
          type="text/plain"
          data-cookieconsent="statistics"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NRJCCGSD');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) - geblokkeerd tot cookie toestemming */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRJCCGSD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            data-cookieconsent="statistics"
          />
        </noscript>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}