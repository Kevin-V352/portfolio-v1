/* <---React---> */
import React, { FC } from "react";

/* <---Styled components---> */
import {
	ContactFormC,
	ContactLabel,
	ContactInput,
	ContactTextArea,
	ContactSubmitButton
} from './contact-form-elements';

import emailjs from "emailjs-com";

const ContactForm = () => {

	const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_1wjwuz8",
        "template_kyqfd0i",
        e.target,
        "user_FL3Ns7CkBO5lOzJgJtPwH"
      )
      .then(
        (result) => {
          alert(`Se envio correctamente: ${result.status}`);
        },
        (error) => {
          alert(`Ocurrio un error: ${error.status}`);
        }
      );
  };

	return (
		<ContactFormC onSubmit={sendEmail}>
			<ContactLabel>Tu correo electrónico</ContactLabel>
			<ContactInput type="email" name="user_email" />
			<ContactLabel>Mensaje</ContactLabel>
			<ContactTextArea name="message" />
			<ContactSubmitButton type="submit">Enviar</ContactSubmitButton>
		</ContactFormC>
	);
};

export default ContactForm;


