/* <---React---> */
import React, { FC } from "react";

/* <---Styled components---> */
import * as S from "./contact-elements";

/* <---Components---> */
import SelectorTable from "../selector-table/container/selector-table";

/* <---Global elements---> */
import { CustomSection } from "../../../../shared/styled-elements/global-styled-elements";

const Contact: FC = (): JSX.Element => { 
  return (
    <CustomSection bgImg={"./assets/4b.jpg"}>
      <S.Container>
        <S.Column>
          <S.Title>Contacto</S.Title>
          <SelectorTable/>
        </S.Column>
      </S.Container>
    </CustomSection>
  );
};

export default Contact;
