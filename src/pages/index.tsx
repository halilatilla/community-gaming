import { NextPage } from 'next'
import Head from 'next/head'

import { initializeApollo, addApolloState } from '@src/graphql/apolloClient'
import { GET_ALL_TOURNAMENTS_QUERY } from '@src/graphql/queries'
import { GET_ALL_TOURNAMENTS_VARIABLES } from '@src/config/constants'
import { useGetAllTournamentsQuery } from '@src/generated/graphql'

const Home: NextPage = () => {
  const { loading, error, data } = useGetAllTournamentsQuery({
    variables: {
      count: GET_ALL_TOURNAMENTS_VARIABLES.count,
      offset: GET_ALL_TOURNAMENTS_VARIABLES.offset,
    },
  })

  return (
    <>
      <Head>
        <title>Community Gaming</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="container">
        <h1 className="text-center text-2xl font-bold capitalize">Upcoming Tournaments</h1>
      </main>
    </>
  )
}

export default Home

//getAllTournamentsQuery initializes the apollo client and returns the data
export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_ALL_TOURNAMENTS_QUERY,
    variables: {
      count: GET_ALL_TOURNAMENTS_VARIABLES.count,
      offset: GET_ALL_TOURNAMENTS_VARIABLES.offset,
    },
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
