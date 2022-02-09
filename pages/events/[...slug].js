import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../helpers/api-util';
import EventsList from '../../components/event/event-list';

export default function FilteredEvents(props) {
    const router = useRouter();

    // const year = +router.query.slug[0];
    // const month = +router.query.slug[1];

    // if (!router.query.slug) {
    //     return <p className="center">Loading...</p>;
    // }
    // if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
    //     return <p>Invalid Filter</p>;
    // }

    const events = props.events;

    if (!events || events.length === 0) {
        return <p>No Events Found</p>;
    }

    return (
        <Fragment>
            <EventsList events={events} />
        </Fragment>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;

    const year = +params.slug[0];
    const month = +params.slug[1];


    if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
        return {
            notFound: true,
            // redirect: {
            //     destination: '/error'
            // }
        };
    }

    const events = await getFilteredEvents({ year, month })

    return {
        props: {
            events
        }
    };
}