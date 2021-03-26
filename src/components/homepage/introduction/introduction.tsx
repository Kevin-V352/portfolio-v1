/* <---React---> */
import React, { FC } from "react";

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
