import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext({
    notification: null, // { title, message, status }
    showNotification: function(data) {},
    hideNotification: function() {}
});

export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState();

    useEffect(() => {
        if(activeNotification && 
            (activeNotification.status === 'success' || 
            activeNotification.status === 'error')
        ){
            const timer = setTimeout(()=>{
                setActiveNotification(null);
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [activeNotification]);
    
    function showNotification(data){
        setActiveNotification(data);
    }

    function hideNotification(){
        setActiveNotification(null);
    }
 
    const context = {
        notification: activeNotification,
        showNotification,
        hideNotification
    };
     
    return <NotificationContext.Provider value={context}>
        {props.children}
    </NotificationContext.Provider>
}

export default NotificationContext;

