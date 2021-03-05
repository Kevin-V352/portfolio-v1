/* <---Styled components dependencies---> */
import styled from 'styled-components';

/* <---React icons---> */
import { 
  FaGithub,
} from 'react-icons/fa';

import {
  BiGitBranch,
  BiSend,
  BiCube,
  BiUser
} from 'react-icons/bi';

//Default settings for icons
const defaultConfigIcon: string = `
  font-size: 2rem;
  margin: 0;
  @media (min-width: 600px) {
    margin-left: 1rem;
  };
`;

//Configuration object for NavBarItem pseudo-classes (initial state)
const initialStateFrame: string = `
  position: absolute;
  content: '';
  height: 0;
  width: 0;
  box-sizing: border-box;
`;

//Configuration object for NavBarItem pseudo-classes (parameters for hover)
const secondaryStateFrame: string = `
  height: 100%;
  width: 100%;
  border: var(--orange) solid 2px;
  transition: height 170ms linear, width 170ms linear 170ms;
`;

export const OptionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-fast);
  height: 5rem;
  background-color: transparent;
  color: var(--gray);
  //Greater than 600px - large screens
  @media (min-width: 600px) {
    justify-content: flex-start;
    width: min-content;
  };
`;

export const OptionText = styled.span`
  margin-left: 1rem;
  display: none;
`;

export const NavBarItem = styled.li`
  position: relative;
  cursor: pointer;
  width: 100%;
  &:last-child {  
    margin-top: auto;
    display: none;
    //Greater than 600px - large screens
    @media (min-width: 600px) {
      display: block;
    };
  };
  &:before {
    ${initialStateFrame};
    bottom: 0;
    left: 0;
  };
  &:after {
    ${initialStateFrame};
    top: 0;
    right: 0;
  };

  &:hover {
    //Animation display in the lower left edge
    &:before {
    ${secondaryStateFrame};
    border-right: none;
    border-bottom: none;
  };
  //Animation display in the upper right edge
  &:after {
    ${secondaryStateFrame};
    border-left: none;
    border-top: none;
  };
    ${OptionContent} {
      color: var(--orange);
      transform: scale(1.15);
      transition: var(--transition-fast);
    };
  };
`;

export const NavBarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%; 
  //Greater than 600px - large screens
  @media (min-width: 600px) {
    flex-direction: column;
  };
`;

export const NavBarContainer = styled.nav`
  z-index: 2;
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 5rem;
  bottom: 0;
  background-color:var(--black);
  transition: var(--transition-normal);
  //Greater than 600px - large screens
  @media (min-width: 600px) {
    width: 4rem;
    height: 100vh; 
      &:hover {
      width: 10rem;
      transition: var(--transition-normal);
      ${OptionText} {
        display: inline;
      };
    };
  };
`;

export const CodeBranchIcon = styled(BiGitBranch)`
  ${defaultConfigIcon};
`;

export const StackCodeIcon = styled(BiCube)`
  ${defaultConfigIcon};
`;

export const ContactIcon = styled(BiSend)`
  ${defaultConfigIcon};
`;

export const UserIcon = styled(BiUser)`
  ${defaultConfigIcon};
`;

export const GitHubIcon = styled(FaGithub)`
  ${defaultConfigIcon};
`;





