/* <---React---> */
import React, { FC } from "react";

/* <---Styled components---> */
import * as S from "./technological-stack-elements";

/* <---Global interfaces---> */
import { ArrStyledComponent } from "../../../shared/global-interfaces/global-interfaces";

/* <---Global elements---> */
import { CustomSection } from "../../../shared/styled-elements/global-styled-elements";

const TechnologicalStack: FC = (): JSX.Element => {
  const stackIcons: ArrStyledComponent[] = [
    { name: "JavaScript", color: "#F4DD11", component: <S.JsIcon /> },
    { name: "HTML5", color: "#E35E2A", component: <S.Html5Icon /> },
    { name: "CSS3", color: "#25A3DC", component: <S.Css3Icon /> },
    { name: "React JS", color: "#69D8FF", component: <S.ReactIcon /> },
    { name: "Redux", color: "#743DB6", component: <S.ReduxIcon /> },
    { name: "Material UI", color: "#2AA5F6", component: <S.MaterialUiIcon /> },
    { name: "Bootstrap", color: "#8100EF", component: <S.BootstrapIcon /> },
    { name: "Sass", color: "#CE699E", component: <S.SassIcon /> },
    { name: "Styled Components", color: "#E8AD67", component: <S.StyledComponentsIcon /> },
  ];

  return (
    <CustomSection bgImg={"./assets/img-backgrounds/3b.png"}>
      <S.Container>
        <S.Column>
          <S.Title>stack tecnológico</S.Title>
          <S.IconsContainer>
            {stackIcons.map((item: ArrStyledComponent, index: number) => (
              <S.IconBox fontColor={item.color} key={index}>
                {item.component}
                <S.IconName>{item.name}</S.IconName>
              </S.IconBox>
            ))}
          </S.IconsContainer>
        </S.Column>
      </S.Container>
    </CustomSection>
  );
};

export default TechnologicalStack;
