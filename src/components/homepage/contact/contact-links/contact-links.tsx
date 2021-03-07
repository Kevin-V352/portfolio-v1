/* <---React---> */
import React, { FC } from "react";

/* <---Styled components---> */
import {
  IconContainer,
  ButtonIcon,
  LinkedinIcon,
  WhatsappIcon,
  MailIcon,
  TelegramIcon,
  MessengerIcon,
} from "./contact-links-elements";

const ContactLinks = () => {
  return (
    <IconContainer>
      <ButtonIcon>
        <a
          href="https://www.linkedin.com/in/kevin-vega-54534a1a9"
          target="_blank"
        >
          <LinkedinIcon />
        </a>
      </ButtonIcon>
      <ButtonIcon>
        <WhatsappIcon />
      </ButtonIcon>
      <ButtonIcon>
        <MailIcon />
      </ButtonIcon>
      <ButtonIcon>
        <TelegramIcon />
      </ButtonIcon>
      <ButtonIcon>
        <MessengerIcon />
      </ButtonIcon>
    </IconContainer>
  );
};

export default ContactLinks;
