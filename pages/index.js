import Head from 'next/head';
import { Fragment } from 'react';
import { getFeaturedEvents } from '../helpers/api-util';
import EventsList from '../components/event/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration';

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content='Find a lot of events' />
      </Head>
      <h1 align="center">Featured Events</h1>
      <NewsletterRegistration />
      <EventsList events={props.events} />
    </Fragment>
  )
}


export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}