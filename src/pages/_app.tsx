import React from 'react'
import { AppProps } from 'next/app'

import NextApolloProvider from '@src/graphql/apollo'
import '@src/styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextApolloProvider>
      <Component {...pageProps} />
    </NextApolloProvider>
  )
}

export default MyApp
