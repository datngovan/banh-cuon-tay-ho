import "@/styles/globals.css";
import Footer from "@/components/layouts/footer";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
});
import SEO from "../next-seo.config";
import NavigationBar from "@/components/layouts/navigation-bar-v2";

export default function App({ Component, pageProps }) {
  return (
    <div className={playfair.className}>
      <Head>
        {/* <!-- Tăng tốc tải blog --> */}
        <link href="https://blogger.googleusercontent.com" rel="dns-fetch" />
        <link href="//maxcdn.bootstrapcdn.com" rel="dns-prefetch" />
        <link href="//fonts.googleapis.com" rel="dns-prefetch" />
        <link href="//use.fontawesome.com" rel="dns-prefetch" />
        <link href="//www.facebook.com" rel="dns-prefetch" />
        <link href="//twitter.com" rel="dns-prefetch" />
        <link href="//www.pinterest.com" rel="dns-prefetch" />
        <link href="//www.linkedin.com" rel="dns-prefetch" />
        <link href="//github.com" rel="dns-prefetch" />
        <link href="//apis.google.com" rel="dns-prefetch" />
        <link href="//connect.facebook.net" rel="dns-prefetch" />
        <link href="//www.google-analytics.com" rel="dns-prefetch" />
        <link href="//www.googletagservices.com" rel="dns-prefetch" />
        <link href="//fonts.googleapis.com" rel="dns-prefetch" />
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Language" content="vi" />
        <meta name="Language" content="vi" />
        <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
      </Head>
      <DefaultSeo {...SEO} />
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
