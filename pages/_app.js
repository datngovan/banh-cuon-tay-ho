import "@/styles/globals.css";
import { Fragment } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Cover from "@/components/layouts/cover";
import Footer from "@/components/layouts/footer";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
       {/* <!-- Tăng tốc tải blog --> */}
       <link href="//1.bp.blogspot.com" rel="dns-prefetch" />
        <link href="//2.bp.blogspot.com" rel="dns-prefetch" />
        <link href="//3.bp.blogspot.com" rel="dns-prefetch" />
        <link href="//4.bp.blogspot.com" rel="dns-prefetch" />
        <link href="//www.blogger.com" rel="dns-prefetch" />
        <link href="//maxcdn.bootstrapcdn.com" rel="dns-prefetch" />
        <link href="//fonts.googleapis.com" rel="dns-prefetch" />
        <link href="//use.fontawesome.com" rel="dns-prefetch" />
        <link href="//ajax.googleapis.com" rel="dns-prefetch" />
        <link href="//resources.blogblog.com" rel="dns-prefetch" />
        <link href="//www.facebook.com" rel="dns-prefetch" />
        <link href="//plus.google.com" rel="dns-prefetch" />
        <link href="//twitter.com" rel="dns-prefetch" />
        <link href="//www.youtube.com" rel="dns-prefetch" />
        <link href="//feedburner.google.com" rel="dns-prefetch" />
        <link href="//www.pinterest.com" rel="dns-prefetch" />
        <link href="//www.linkedin.com" rel="dns-prefetch" />
        <link href="//feeds.feedburner.com" rel="dns-prefetch" />
        <link href="//github.com" rel="dns-prefetch" />
        <link href="//player.vimeo.com" rel="dns-prefetch" />
        <link href="//platform.twitter.com" rel="dns-prefetch" />
        <link href="//apis.google.com" rel="dns-prefetch" />
        <link href="//connect.facebook.net" rel="dns-prefetch" />
        <link href="//cdnjs.cloudflare.com" rel="dns-prefetch" />
        <link href="//www.google-analytics.com" rel="dns-prefetch" />
        <link href="//pagead2.googlesyndication.com" rel="dns-prefetch" />
        <link href="//googleads.g.doubleclick.net" rel="dns-prefetch" />
        <link href="//www.gstatic.com" rel="preconnect" />
        <link href="//www.googletagservices.com" rel="dns-prefetch" />
        <link href="//static.xx.fbcdn.net" rel="dns-prefetch" />
        <link href="//tpc.googlesyndication.com" rel="dns-prefetch" />
        <link href="//syndication.twitter.com" rel="dns-prefetch" />
        <link href="//fonts.googleapis.com" rel="dns-prefetch" />
        <title>
          Bánh Cuốn Tây Hồ - Đinh Tiên Hoàng - Thành Phố Hồ Chí Minh
        </title>
        <meta
          name="title"
          content="Bánh Cuốn Tây Hồ - Đinh Tiên Hoàng - Thành Phố Hồ Chí Minh"
        />
        <link
          rel="icon"
          href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZZA826URw6KEQ9S2eNB1FOvgECmM-SF50N4dL-xRZ4qLUvvhfmeaud1wBq9t1ddmmpdqnEv9XhyC5BNibAYivuAKXp_ZZeVvVMIqwmbrdBQQt2cDTozMvKd1zqhpi6uIsTOAJoMzg7ln5s0nCmyfdZ6pDDH62l4r8qrRpRR0OMxZ3HQ/s1600/logo.png"
          type="image/x-icon"
        ></link>
        <meta
          name="description"
          content="Bánh Cuốn Tây Hồ được Bà Trần Thị Cà (1919-2006) quê ở Hà Nội mở năm 1962 tại sân đến thờ Cụ Phan Châu Trinh hiệu là Tây Hồ lúc ấy đấu chợ Đa Kao, Quận 1"
        />
        <meta
          property="og:image"
          content="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNpLubQYqZ6Kjypcg6MUHQ2lqPZRS0PZhyphenhyphengssPrbfdMiB2-BfPs2V0CcytbGYPKNmEcUyvKtoJNRTOzh-K4mlokS-JIx1P74exThXuZwPtjG_AKOvD1W7wGW9ep1KrVVBWeEtL-0Lp2-seFTFrEQHAyHWRhPcAruSg3HE6YfQ1iRKtTw/s1600/banner.png"
        />
        <meta property="og:url" content="https://restcipe.io.vn" />
        <meta property="og:title" content="Bánh Cuốn Tây Hồ" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Bánh Cuốn Tây Hồ được Bà Trần Thị Cà (1919-2006) quê ở Hà Nội mở năm 1962 tại sân đến thờ Cụ Phan Châu Trinh hiệu là Tây Hồ lúc ấy đấu chợ Đa Kao, Quận 1"
        />
      </Head>
      <Cover />
      <Component {...pageProps} />
      <Footer />
      <SpeedInsights />
    </Fragment>
  );
}
