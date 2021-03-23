/* <---React---> */
import React, { FC, useEffect, useState } from "react";

/* <---Styled components---> */
import * as S from "./nav-bar-elements";

/* <---Global interfaces---> */
import { ArrComponent } from "../../shared/global-interfaces/global-interfaces";

const NavBar: FC = (): JSX.Element => {

  const positionOptions: ArrComponent[] = [
    { name: "Yo", component:  <S.UserIcon /> },
    { name: "Proyectos", component:  <S.CodeBranchIcon /> },
    { name: "Stack", component:  <S.StackCodeIcon /> },
    { name: "Contacto", component:  <S.ContactIcon /> }
  ];

  const [activePosition, setActivePostion] = useState<number>(0);

  //Set the position in the document
  const positionView = (multiplier: number): void => {
    const tallRealWindow: number = document.documentElement.scrollHeight / 4;
    window.scrollTo({
      top: tallRealWindow * multiplier,
      behavior: "smooth"
    });  
  };

  //Calculates the coordinate (Y) where the user is and activates the side icon
  const activePositionIcon = (): void => {
    const coordinateY: number = window.pageYOffset;
    const clientScreenSize: number = window.innerHeight;
    setActivePostion(Math.floor(coordinateY / clientScreenSize));
  };
  
  
  useEffect(() => {
    //Call the function to activate the icons every time the user scrolls
    window.addEventListener("scroll", activePositionIcon);
  }, []);

  return (
    <S.NavBarContainer>
      <S.NavBarList>
        {
          positionOptions.map((option: ArrComponent, index: number) => (
            <S.NavBarItem onClick={() => positionView(index)}>
              <S.OptionContent active={activePosition === index ? true : false}>
                {option.component}
                <S.OptionText>{option.name}</S.OptionText>
              </S.OptionContent>
            </S.NavBarItem>
          ))
        }
        <S.NavBarItem>
          <S.OptionContent active={false}>
            <S.GitHubIcon />
            <S.OptionText>GitHub</S.OptionText>
          </S.OptionContent>
        </S.NavBarItem>
      </S.NavBarList>
    </S.NavBarContainer>
  );
};

export default NavBar;
