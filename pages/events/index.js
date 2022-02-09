import { Fragment } from 'react';
import { getAllEvents } from '../../helpers/api-util';
import { useRouter } from 'next/router';
import EventsList from '../../components/event/event-list';
import EventsSearch from '../../components/event/events-search';

export default function Events(props) {
    const allEvents = props.events;
    const router = useRouter();

    function filterEvents(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventsSearch filterEvents={filterEvents} />
            <EventsList events={allEvents} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events
        },
        revalidate: 60
    }
}