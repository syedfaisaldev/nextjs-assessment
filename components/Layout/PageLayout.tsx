import Head from 'next/head'
import Footer from '../common/Footer'
import Header from '../common/Header'

const PageLayout = ({ children }: any) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Next Js Task</title>
        <meta name="description" content="Next Js App Assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='page-wrapper flex-initial my-14'>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout
