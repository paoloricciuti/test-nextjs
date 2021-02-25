import Layout from '../components/Layout'
import PageContextProvider from '../contexts/PageContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <PageContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PageContextProvider>
  )
}

export default MyApp
