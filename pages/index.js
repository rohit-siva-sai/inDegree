import Image from 'next/image'
import { Inter } from 'next/font/google'
import Future from '@/components/homepage/future'
import Institute from '@/components/homepage/institute'
import SimpleStart from '@/components/homepage/simpleStart'
import Bootcamp from '@/components/homepage/bootcamp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`pt-4 ${inter.className}`}
    >
      <Future/>
      <Institute/>
      <SimpleStart/>
      <Bootcamp/>
     
    </main>
  )
}
