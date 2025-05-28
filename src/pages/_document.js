import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
     <Head>
        {/* ✅ Favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* Optional: support more formats */}
        <link rel="icon" type="image/png" href="/assets/logo.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
