import { useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { initializeApollo, addApolloState } from '@src/graphql/apolloClient'
import { GET_ALL_TOURNAMENTS_QUERY } from '@src/graphql/queries'
import { useGetAllTournamentsQuery } from '@src/generated/graphql'
import { GET_ALL_TOURNAMENTS_VARIABLES } from '@src/config/constants'
import { useLocalStorage } from '@src/hooks'
import { Layout, TournamentListWithPaginationAndSorting } from '@src/components'

const Home: NextPage = () => {
  const { loading, error, data } = useGetAllTournamentsQuery({
    variables: GET_ALL_TOURNAMENTS_VARIABLES,
  })

  //set initial data to localStorage
  const [_, setLocalStorage] = useLocalStorage<any>('tournaments', data?.listedTournaments)

  //watch and set data to localStorage if data changed
  useEffect(() => {
    if (data) {
      setLocalStorage(data.listedTournaments)
    }
  }, [data])

  console.log(data)

  return (
    <>
      <Head>
        <title>Community Gaming</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <main className="container">
          {loading && 'Loading...'}
          {error && 'Something went wrong...'}
          {data && <TournamentListWithPaginationAndSorting />}
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
    variables: GET_ALL_TOURNAMENTS_VARIABLES,
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
