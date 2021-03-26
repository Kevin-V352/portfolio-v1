/* <---React---> */
import React, { FC } from "react";

import * as S from "./introduction-elements";

const Introduction: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.Column>
        <S.Title>Inicio</S.Title>
        <S.GlassesIcon/>
        <S.Subtitle>KEVIN VEGA</S.Subtitle>
        <S.Description>
          Soy un desarrollador web con orientación al área del front-end.
        </S.Description>
      </S.Column>
    </S.Container>
  );
};

export default Introduction;
