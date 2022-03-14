import { NextPage } from 'next'
import Head from 'next/head'

import { initializeApollo, addApolloState } from '@src/graphql/apolloClient'
import { GET_POSTS } from '@src/graphql/queries'
import { useGetAllTournamentsQuery } from '@src/generated/graphql'

const POSTS_PER_PAGE = 10

const Home: NextPage = () => {
  const { loading, error, data } = useGetAllTournamentsQuery({
    variables: {
      count: POSTS_PER_PAGE,
      offset: POSTS_PER_PAGE,
    },
  })

  return (
    <>
      <Head>
        <title>Community Gaming</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="container mx-auto flex flex-col items-center space-y-8 p-3 md:p-6">
        <h1 className="text-center text-2xl font-bold capitalize">Welcome</h1>
        <div className="w-full max-w-2xl space-y-8">Hello world</div>
      </main>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_POSTS,
    variables: {
      count: POSTS_PER_PAGE,
      offset: POSTS_PER_PAGE,
    },
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
