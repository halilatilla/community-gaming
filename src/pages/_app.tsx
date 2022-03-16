import { AppContext, AppInitialProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ToastContainer } from 'react-toastify'

import { NProgress } from '@src/hooks/index'
import { useApollo } from '@src/graphql/apolloClient'
import { TournamentsProvider } from '@src/store'
import '@src/styles/tailwind.css'

function MyApp({ Component, pageProps }: AppContext & AppInitialProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <>
      <NProgress />
      <ToastContainer position="bottom-right" />
      <ApolloProvider client={apolloClient}>
        <TournamentsProvider>
          <Component {...pageProps} />
        </TournamentsProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
