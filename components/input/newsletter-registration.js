import { useRef, useContext } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {
  const emailRef =  useRef();
  const notificationCtx = useContext(NotificationContext);
  

  function registrationHandler(event) {
    event.preventDefault();

    const emailInput = emailRef.current.value;

    notificationCtx.showNotification({
        title: 'Signing up..',
        message: 'Registering for newsletter.',
        status: 'pending'
    });

    fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email: emailInput}),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
      if(response.ok){
          return response.json();
      }
      
      return response.json().then(data=> {
          throw new Error(data.message || 'something went wrong!');
      })
    })
    .then(data => {
        notificationCtx.showNotification({
            title: 'Success!',
            message: 'Successfully registered for newsletter!',
            status: 'success'
        })
    })
    .catch(err => {
        notificationCtx.showNotification({
            title: 'Error!',
            message: err.message || 'Something went wrong!',
            status: 'error'
        })
    });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;