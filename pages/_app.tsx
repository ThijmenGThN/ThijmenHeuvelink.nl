import Head from 'next/head'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: any) {

  return (
    <>
      <Head>
        <title>Thijmen Heuvelink</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
