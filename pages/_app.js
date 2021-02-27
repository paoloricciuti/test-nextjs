import Layout from '../components/Layout'
import PageContextProvider from '../contexts/PageContext'
import '../styles/globals.css'
import io from 'socket.io-client';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    const socket=io();
    socket.on("msg", data => {
      console.log(data);
    })
  },[]);

  return (
    <PageContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PageContextProvider>
  )
}

export default MyApp
