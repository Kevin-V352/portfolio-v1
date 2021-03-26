/* <---React---> */
import React, { FC } from "react";

/* <---Global elements---> */
import { CustomSection } from "../../../shared/styled-elements/global-styled-elements";

import * as S from "./introduction-elements";

const Introduction: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.Column>
        <S.Title>Inicio</S.Title>
      </S.Column>
    </S.Container>
  );
};

export default Introduction;
