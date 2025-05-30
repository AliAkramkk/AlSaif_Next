import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
     <Head>
        {/* ✅ Favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* Optional: support more formats */}
        <link rel="icon" type="image/png" href="/assets/logo.png" />
 <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
  <link 
    href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@500&family=Wix+Madefor+Text:wght@400&display=swap" 
    rel="stylesheet" 
  />


        
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
