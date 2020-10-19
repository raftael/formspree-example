import styles from '../../styles/Home.module.css'
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm('myContactForm');
    if (state.succeeded) {
        return <div>Thank you for your message!</div>;
      }
    return (
        <div className={styles.contactForm}>
            <h1>Contact me!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" className={styles.inputTxt} />
                <ValidationError field="email" prefix="Email" errors={state.errors} className={styles.error} />
                
                <label htmlFor="message">Message:</label>
                <input id="message" type="message" name="message" className={styles.inputTxtArea} />
                <ValidationError field="message" prefix="Message" errors={state.errors} className={styles.error} />

                <button type="submit" className={styles.btnContactForm}>Send Message</button>
            </form>
        </div>
    )
}