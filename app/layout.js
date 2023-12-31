import { Footer, Navbar } from '@/components';
import './globals.css'
import { Montserrat } from 'next/font/google'
// import Head from 'next/head';


export const metadata = {
  title: 'Therapy AID',
  description: 'Welcome to Therapy AID ',
}

const montserrat = Montserrat({
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="QWY1y6k9SMN1td9xI2fQ_F0Fi8Oop8eyhTcWaXYkxNQ" />
      </head>
      <body className={`${montserrat.className} `}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
