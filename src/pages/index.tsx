import { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Community Gaming</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="container mx-auto flex flex-col items-center space-y-8 p-3 md:p-6">
        <h1 className="text-center text-2xl font-bold capitalize">Welcome</h1>
        <div className="w-full max-w-2xl space-y-8">
          Hello world
        </div>
      </main>
    </>
  )
}

export default Home
