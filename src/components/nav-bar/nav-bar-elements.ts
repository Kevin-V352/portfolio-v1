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
  margin-left: 1rem;
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
  transition: var(--transition-fast);
  display: flex;
  align-items: center;
  height: 5rem;
  width: min-content;
  background-color: transparent;
  color: var(--gray);
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
  flex-direction: column;
  align-items: center;
  height: 100%; 
`;

export const NavBarContainer = styled.nav`
  overflow: hidden;
  width: 4rem;
  height: 100vh;
  position: fixed;
  background-color:var(--black);
  transition: var(--transition-normal);
  &:hover {
    width: 10rem;
    transition: var(--transition-normal);
    ${OptionText} {
      display: inline;
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





