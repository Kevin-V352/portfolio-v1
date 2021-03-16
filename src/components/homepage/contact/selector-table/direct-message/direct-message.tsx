/* <---React---> */
import React, { FC } from "react";

/* <---Styled components---> */
import * as S from './direct-message-elements';

import emailjs from "emailjs-com";

const Form: FC = (): JSX.Element => {

	const sendEmail = (e: any) => {
    e.preventDefault();
    /* emailjs.sendForm(
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
      ); */
      e.target.reset();
  };

	return (
    <S.Form onSubmit={sendEmail}>
      <S.Label>Tu correo electrónico</S.Label>
      <S.Input type="email" name="user_email" />
      <S.Label>Mensaje</S.Label>
      <S.TextArea name="message" />
      <S.SubmitButton type="submit">Enviar</S.SubmitButton>
    </S.Form>
	);
};

export default Form;


