import '@/styles/globals.css'
import { Fragment } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react';
import Cover from '@/components/layouts/cover'
import Footer from '@/components/layouts/footer'
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  return <Fragment>
  <Head>

        <title>Bánh Cuốn Tây Hồ - Đinh Tiên Hoàng - Thành Phố Hồ Chí Minh</title>
        <meta name="title" content="Bánh Cuốn Tây Hồ - Đinh Tiên Hoàng - Thành Phố Hồ Chí Minh"/>
        <link rel="icon" href="https://restcipe.io.vn/favicon.ico" type="image/x-icon"></link>
        <meta name="description" content="Bánh Cuốn Tây Hồ được Bà Trần Thị Cà (1919-2006) quê ở Hà Nội mở năm 1962 tại sân đến thờ Cụ Phan Châu Trinh hiệu là Tây Hồ lúc ấy đấu chợ Đa Kao, Quận 1"/>
        <meta property="og:image" content="https://restcipe.io.vn/opengraph-image.png"/>
        <meta property="og:url" content="https://restcipe.io.vn" />
        <meta property="og:title" content="Bánh Cuốn Tây Hồ" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Bánh Cuốn Tây Hồ được Bà Trần Thị Cà (1919-2006) quê ở Hà Nội mở năm 1962 tại sân đến thờ Cụ Phan Châu Trinh hiệu là Tây Hồ lúc ấy đấu chợ Đa Kao, Quận 1" />
  </Head>
    <Cover/>
    <Component {...pageProps} />
    <Footer/>
    <SpeedInsights />
  </Fragment> 
  
}
