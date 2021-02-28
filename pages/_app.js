import Layout from '../components/Layout';
import PageContextProvider from '../contexts/PageContext';
import RoomContextProvider from '../contexts/RoomContext';
import SocketContextProvider from '../contexts/SocketContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <RoomContextProvider>
      <SocketContextProvider>
        <PageContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PageContextProvider>
      </SocketContextProvider>
    </RoomContextProvider>
  )
}

export default MyApp
