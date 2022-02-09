import Head from 'next/head';
import '../styles/globals.css'
import Layout from '../components/layout/layout';
import { NotificationContextProvider } from '../store/notification-context';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        {/* We can put the Head tag on every page if we want different values*/}
        <Head>
          <title>NextJS Events</title>
          <meta name="description" content='Find a lot of events' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  )
}

export default MyApp
