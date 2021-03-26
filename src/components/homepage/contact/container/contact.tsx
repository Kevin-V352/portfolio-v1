/* <---React---> */
import React, { FC, useState } from "react";

/* <---Styled components---> */
import * as S from "./contact-elements";

/* <---Components---> */
import SelectorTable from "../selector-table/container/selector-table";

/* <---Global elements---> */
import { CustomSection } from "../../../../shared/styled-elements/global-styled-elements";

const Contact: FC = (): JSX.Element => { 

  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  window.addEventListener("resize", () => {
    if(window.innerWidth > window.innerHeight){
      setKeyboardHeight(window.outerHeight);
    }
    else {
      setKeyboardHeight(0);
      const tallRealWindow: number = document.documentElement.scrollHeight / 4;
      /* window.scrollTo({
        top: tallRealWindow * 3
      }); */
    }
  });

  return (
      <S.Container>
        <S.Column height={keyboardHeight}>
          <S.Title>Contacto</S.Title>
          <SelectorTable/>
        </S.Column>
      </S.Container>
  );
};

export default Contact;
