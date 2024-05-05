import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "GuardME",
  description: "GuardMe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="worker"
      ></Script>
      {/* <Script
        id="microsoft-clarity-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_MICROSOFT_CLARITY}");
          `,
        }}
      /> */}
      <html lang="en">
        {/* <SEO /> */}
        <body style={{ overflowX: "hidden" }} suppressHydrationWarning={true}>
          {children}
        </body>
        <link rel="icon" href="/favicon.ico" />
      </html>
    </>
  );
}
