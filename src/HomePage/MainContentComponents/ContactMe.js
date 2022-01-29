import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './styles/ContactMe.scss';


export default function ContactMe() {
  const form = useRef();

  function sendEmail(event) {
    event.preventDefault();
    emailjs.sendForm('service_fyrg1tk', 'template_qtpd67b', form.current, 'user_IjWhKEdBdcUy7gnSGlvi8')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    event.target.reset();
  }

  return (
    <section className="contact-page">
      <h2 className="contact-header">Ready for your dream site? Inquire below!</h2>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div>
          <input type="text" placeholder="Name" name="user_name" />
        </div>
        <div>
          <input type="email" placeholder="Email" name="user_email" />
        </div>
        <div>
          <input type="subject" placeholder="Subject" name="subject" />
        </div>
        <div>
          <textarea placeholder="Your Message" name="message"></textarea>
        </div>
        <div>
          <input type="submit" value="Send"></input>
        </div>
      </form>
    </section>
  )
}