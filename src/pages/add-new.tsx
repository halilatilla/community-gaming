import { NextPage } from 'next'
import Head from 'next/head'

import { Layout } from '@src/components'

const AddNew: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community Gaming | Add New</title>
      </Head>
      <Layout>
        <main className="container">
          <h1 className="text-center text-2xl font-bold capitalize">Add New</h1>
        </main>
      </Layout>
    </>
  )
}

export default AddNew
