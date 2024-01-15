import '@/styles/globals.css'
import { Fragment } from 'react'
import NavigationBarV2 from '@/components/layouts/navigation-bar-v2'
import Cover from '@/components/layouts/cover'
import Footer from '@/components/layouts/footer'
export default function App({ Component, pageProps }) {
  return <Fragment>
    <Cover/>
    <Component {...pageProps} />
    <Footer/>
  </Fragment> 
  
}
