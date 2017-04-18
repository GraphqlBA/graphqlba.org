import Layout from '../components/Layout'
import LinksList from '../components/LinksList'
import Head from 'next/head'

export default () => (
  <Layout>
    <Head>
      <title>GraphQL BA</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container">
      <style jsx>{`
        .container {
          position: fixed;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .container img {
          height: 250px;
        }
        ul li {
          list-style: none;
          display:inline;
          margin-left: 20px;
        }
      `}</style>
      <img src="/static/logo.png" alt="" />
      <LinksList />
    </div>
  </Layout>
)
