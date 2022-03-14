import { AppContext, AppInitialProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { useApollo } from '@src/lib'
import '@src/styles/tailwind.css'

function MyApp({ Component, pageProps }: AppContext & AppInitialProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
