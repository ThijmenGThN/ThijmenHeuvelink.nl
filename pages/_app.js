import '../styles/tailwind.css'

import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Thijmen Heuvelink</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
