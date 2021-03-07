/* <---React---> */
import React, { FC } from "react";

import * as S from './homepage-elements';

/* <---Components---> */
import { CustomSection } from "../../../shared/styled-elements/global-styled-elements";
import Contact from "../contact/container/contact";
import Introduction from "../introduction/introduction";

const Homepage: FC = () => {
  return (
    <S.HompageContainer>
      <Introduction />
      <CustomSection bgImg={"./assets/2b.jpg"} />
      <CustomSection bgImg={"./assets/3b.jpg"} />
      <Contact />
    </S.HompageContainer>
  );
};

export default Homepage;
