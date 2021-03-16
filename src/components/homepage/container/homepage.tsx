/* <---React---> */
import React, { FC } from "react";

/* <---Styled components---> */
import * as S from './homepage-elements';

/* <---Components---> */
import { CustomSection } from "../../../shared/styled-elements/global-styled-elements";
import Contact from "../contact/container/contact";
import Introduction from "../introduction/introduction";
import TechnologicalStack from "../technological-stack/technological-stack";

const Homepage: FC = () => {
  return (
    <S.HompageContainer>
      <Introduction />
      <CustomSection bgImg={"./assets/2b.jpg"} />
      <TechnologicalStack />
      <Contact />
    </S.HompageContainer>
  );
};

export default Homepage;
