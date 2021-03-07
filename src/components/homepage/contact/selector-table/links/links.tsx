/* <---React---> */
import React, { FC } from "react";

/* <---Styled components---> */
import * as S from "./links-elements";

const Links: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.ButtonIcon>
        <a
          href="https://ya.co.ve/KDG"
          target="_blank"
        >
          <S.LinkedinIcon />
        </a>
      </S.ButtonIcon>
      <S.ButtonIcon>
        <a
          href="https://ya.co.ve/BxK"
          target="_blank"
        >
          <S.WhatsappIcon />
        </a>
      </S.ButtonIcon>
      <S.ButtonIcon>
        <a href="mailto:kevinvega2070@gmail.com">
          <S.MailIcon />
        </a> 
      </S.ButtonIcon>
      <S.ButtonIcon>
        <a
          href="https://ya.co.ve/eNR"
          target="_blank"
        >
          <S.TelegramIcon />
        </a>
      </S.ButtonIcon>
      <S.ButtonIcon>
        <S.MessengerIcon />
      </S.ButtonIcon>
    </S.Container>
  );
};

export default Links;
