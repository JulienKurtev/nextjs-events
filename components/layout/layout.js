import { Fragment, useContext } from 'react';
import Header from './header';
import Notification from '../UI/notification';
import NotificationContext from '../../store/notification-context';

const Layout = props => {
    const notificationCtx = useContext(NotificationContext);

    const activeNotification = notificationCtx.notification;
    return (
        <Fragment>
            <Header />
            <main>
                {props.children}
            </main>
            {activeNotification && <Notification
                title={activeNotification.title}
                message={activeNotification.message}
                status={activeNotification.status} 
            />}
        </Fragment>
    )
}

export default Layout;