import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NLX | On-Chain Perpetuals backed by Bitcoin',
  description: 'Trade On-Chain Perpetuals including BTC, CORE and other top cryptocurrencies with up to 50x leverage directly from your wallet on Core Blockchain.',
  icons:"./favicon.ico",
  openGraph: {
    images: [
      {
        url:"https://testlandingv2.vercel.app/nlx-banner.png",
        width:1200,
        height:630,
        alt:"og-image"
      }
    ]
  },
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
       <Head>
        <link rel="preload" href="/BebasNeue-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/>
      </Head>
      <body className={inter.className} style={{overflowX:"hidden",}}>{children}</body>
    </html>
  )
}
