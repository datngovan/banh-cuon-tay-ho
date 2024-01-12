import '@/styles/globals.css'
import { Fragment } from 'react'
import NavigationBar from '@/components/layouts/navigation-bar'
import NavigationBarV2 from '@/components/layouts/navigation-bar-v2'
export default function App({ Component, pageProps }) {
  return <Fragment>
    <NavigationBar/>
    <Component {...pageProps} />
  </Fragment> 
  
}
