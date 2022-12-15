import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'
import '../public/fonts/styles.css'
import { NextSeo } from 'next-seo'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const layout = (Component as any).layout
  return (
    <>
      <Head>
        <title>PokerSocial</title>
        <meta name="description" content="The PokerSocial" />
        <link rel="icon" href="/favicon.ico" />
        {layout === 'content' && (
          <>
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
              crossOrigin="anonymous"
            />
            <link
              href="http://ps-docs-content.s3-website.ap-south-1.amazonaws.com/pokersocial/css/style.css"
              rel="stylesheet"
            />
          </>
        )}
      </Head>
      {layout === 'content' ? (
        <Component {...pageProps} />
      ) : (
        <Provider>
          <Component {...pageProps} />
        </Provider>
      )}
    </>
  )
}

export default MyApp
