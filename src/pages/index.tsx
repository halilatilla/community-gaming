import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'

import { initializeApollo, addApolloState, GET_ALL_TOURNAMENTS_QUERY } from '@src/graphql'
import { GET_ALL_TOURNAMENTS_VARIABLES } from '@src/config/constants'
import { useLocalStorage } from '@src/hooks'
import { ITournament } from '@src/types'
import { Layout, TournamentListWithPaginationAndSorting } from '@src/components'

const Home = ({ listedTournaments }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  //set initial data to localStorage
  useLocalStorage<ITournament[]>('tournaments', listedTournaments)

  return (
    <>
      <Head>
        <title>Community Gaming</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <main className="container">{listedTournaments && <TournamentListWithPaginationAndSorting />}</main>
      </Layout>
    </>
  )
}

export default Home

//getAllTournamentsQuery initializes the apollo client and returns the data
export const getServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const data = await apolloClient.query({
    query: GET_ALL_TOURNAMENTS_QUERY,
    variables: GET_ALL_TOURNAMENTS_VARIABLES,
  })

  const listedTournaments: ITournament[] = data.data.listedTournaments ?? {}

  return addApolloState(apolloClient, {
    props: {
      listedTournaments,
    },
  })
}
