import '@/styles/globals.css'
import { Fragment } from 'react'
import NavigationBar from '@/components/layouts/navigation-bar'
export default function App({ Component, pageProps }) {
  return <Fragment>
    <NavigationBar/>
    <Component {...pageProps} />
  </Fragment> 
  
}
