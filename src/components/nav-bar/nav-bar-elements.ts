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
const defaultConfigIcon = `
  font-size: 2rem;
  margin-left: 1rem;
`;

export const OptionButton = styled.div`
  transition: ease var(--transition-time-fast);
  display: flex;
  align-items: center;
  height: 5rem;
  background-color: transparent;
  border: none;
  padding: 0;
  color: var(--gray);
`;

export const OptionText = styled.span`
  margin-left: 1rem;
  display: none;
`;

export const NavBarItem = styled.li`
  width: 100%;
  &:last-child {  
    margin-top: auto;
  };
  &:hover {
    ${OptionButton} {
      color: var(--orange);
      transform: scale(1.15);
      transition: ease var(--transition-time-fast);
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
  width: 4rem;
  height: 100vh;
  position: fixed;
  background-color:var(--black);
  transition: var(--transition-time-normal);
  &:hover {
    width: 10rem;
    transition: var(--transition-time-normal);
    ${OptionText} {
      display: block;
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





