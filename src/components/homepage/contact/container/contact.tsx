/* <---React---> */
import React, { FC, useState, useEffect } from "react";

/* <---Styled components---> */
import * as S from "./contact-elements";

/* <---Components---> */
import SelectorTable from "../selector-table/container/selector-table";

const Contact: FC = (): JSX.Element => {
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > window.innerHeight) {
        setKeyboardHeight(window.outerHeight);
      } else {
        setKeyboardHeight(0);
      };
    });
  }, []);

  return (
    <S.Container>
      <S.Column height={keyboardHeight}>
        <S.Title>Contacto</S.Title>
        <SelectorTable />
      </S.Column>
    </S.Container>
  );
};

export default Contact;
