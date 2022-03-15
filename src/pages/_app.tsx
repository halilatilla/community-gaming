import { AppContext, AppInitialProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ToastContainer } from 'react-toastify'

import { NProgress } from '@src/hooks/index'
import { useApollo } from '@src/lib'
import '@src/styles/tailwind.css'

function MyApp({ Component, pageProps }: AppContext & AppInitialProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <>
      <NProgress />
      <ToastContainer />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}

export default MyApp
