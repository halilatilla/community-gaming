import { NextPage } from 'next'
import Head from 'next/head'

import { Layout, AddNewTournament } from '@src/components'

const AddNew: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community Gaming | Add New</title>
      </Head>
      <Layout>
        <main className="container space-y-8">
          <h1 className="text-center text-2xl font-bold capitalize">Add New Tournament</h1>
          <AddNewTournament />
        </main>
      </Layout>
    </>
  )
}

export default AddNew
