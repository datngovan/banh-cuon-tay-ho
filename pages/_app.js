import '@/styles/globals.css'
import { Fragment } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react';
import Cover from '@/components/layouts/cover'
import Footer from '@/components/layouts/footer'
export default function App({ Component, pageProps }) {
  return <Fragment>
    <Cover/>
    <Component {...pageProps} />
    <Footer/>
    <SpeedInsights />
  </Fragment> 
  
}
