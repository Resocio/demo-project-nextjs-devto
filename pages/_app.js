import Head from 'next/head'
import { FacebookOpenGraph } from '@resoc/core'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta name="description" content={pageProps.description} />

        <meta property="og:title" content={pageProps.title} />
        <meta property="og:description" content={pageProps.description} />
        <meta property="og:image" content={`/open-graph/${pageProps.ogImage}`} />
        <meta property="og:image:width" content={FacebookOpenGraph.width} />
        <meta property="og:image:height" content={FacebookOpenGraph.height} />

        <link rel="icon" href="/resoc.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
