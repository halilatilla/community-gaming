import { useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { initializeApollo, addApolloState } from '@src/graphql/apolloClient'
import { GET_ALL_TOURNAMENTS_QUERY } from '@src/graphql/queries'
import { GET_ALL_TOURNAMENTS_VARIABLES } from '@src/config/constants'
import { useGetAllTournamentsQuery } from '@src/generated/graphql'
import { Layout, TournamentList } from '@src/components'
import { useLocalStorage } from '@src/hooks'

const Home: NextPage = () => {
  const { loading, error, data } = useGetAllTournamentsQuery({
    variables: {
      count: GET_ALL_TOURNAMENTS_VARIABLES.count,
      offset: GET_ALL_TOURNAMENTS_VARIABLES.offset,
    },
  })

  const [tournaments, setTournaments] = useLocalStorage<any[]>('tournaments', data?.listedTournaments || [])

  useEffect(() => {
    if (data) {
      setTournaments(data.listedTournaments)
    }
  }, [data])

  return (
    <>
      <Head>
        <title>Community Gaming</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <main className="container space-y-8">
          <h1 className="text-center text-4xl font-bold capitalize">Tournaments</h1>
          {loading && 'Loading...'}
          {error && 'Something went wrong...'}
          {data && <TournamentList tournaments={tournaments} />}
        </main>
      </Layout>
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
