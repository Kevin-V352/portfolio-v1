/* <---React---> */
import React, { FC } from "react";

/* <---Styled components---> */
import * as S from './homepage-elements';

/* <---Components---> */
import Contact from "../contact/container/contact";
import Introduction from "../introduction/introduction";
import TechnologicalStack from "../technological-stack/technological-stack";
import Projetcs from "../projects/projects";

const Homepage: FC = () => {
  return (
    <S.HompageContainer>
      <Introduction />
      <Projetcs />
      <TechnologicalStack />
      <Contact />
    </S.HompageContainer>
  );
};

export default Homepage;
