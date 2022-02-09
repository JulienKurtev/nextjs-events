import EventItem from './event-item';
import styles from '../../styles/event-list.module.css';

const EventsList = props => {
    const { events } = props;

    return (
        <ul className={styles.list}>
            {events.map(event => <EventItem
                key={event.id}
                title={event.title}
                image={event.image}
                date={event.date}
                location={event.location}
                id={event.id}
            />)}
        </ul>
    )
}

export default EventsList;