/* <---React---> */
import React, { FC } from "react";

/* <---Styled components---> */
import {
  UserIcon,
  OptionText,
  GitHubIcon,
  NavBarList,
  NavBarItem,
  ContactIcon,
  OptionContent,
  StackCodeIcon,
  CodeBranchIcon,
  NavBarContainer,
} from "./nav-bar-elements";

const NavBar: FC = (): JSX.Element => {
  const positionView = (multiplier: number) => {
    window.scrollTo({
      top: window.innerHeight * multiplier,
      behavior: "smooth",
    });
  };

  return (
    <NavBarContainer>
      <NavBarList>
        <NavBarItem onClick={() => positionView(0)}>
          <OptionContent>
            <UserIcon />
            <OptionText>Yo</OptionText>
          </OptionContent>
        </NavBarItem>
        <NavBarItem onClick={() => positionView(1)}>
          <OptionContent>
            <CodeBranchIcon />
            <OptionText>Proyectos</OptionText>
          </OptionContent>
        </NavBarItem>
        <NavBarItem onClick={() => positionView(2)}>
          <OptionContent>
            <StackCodeIcon />
            <OptionText>Stack</OptionText>
          </OptionContent>
        </NavBarItem>
        <NavBarItem onClick={() => positionView(3)}>
          <OptionContent>
            <ContactIcon />
            <OptionText>Contacto</OptionText>
          </OptionContent>
        </NavBarItem>
        <NavBarItem>
          <OptionContent>
            <GitHubIcon />
            <OptionText>GitHub</OptionText>
          </OptionContent>
        </NavBarItem>
      </NavBarList>
    </NavBarContainer>
  );
};

export default NavBar;
