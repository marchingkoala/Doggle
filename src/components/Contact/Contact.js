import React from 'react';
import { useForm, ValidationError } from "@formspree/react";
import './contact.css';

const Contact = () => {

    const [state, handleSubmit] = useForm("xzblpyvj");

    // if the email is sent successfully, display below
     if (state.succeeded) {
       return <p>Thank you for your email!</p>;
     }

     return (
        <div className='contact_container'>
            <h1>Email me!</h1>
            <h2>Got questions? or want submit your pup?</h2>
       <form className='contact_form' onSubmit={handleSubmit}>
         <input id="email" type="email" name="email" placeholder='Your email here!'/>
         <ValidationError prefix="Email" field="email" errors={state.errors} />
         <textarea id="message" name="message" placeholder='Woof! tell me everything!'/>
         <ValidationError
           prefix="Message"
           field="message"
           errors={state.errors}
         />
         <button type="submit" disabled={state.submitting}>
           Submit
         </button>
       </form>
        </div>
     );


};


export default Contact;