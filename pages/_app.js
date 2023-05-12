import Footer from '@/components/navfoot/footer'
import Navbar from '@/components/navfoot/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
