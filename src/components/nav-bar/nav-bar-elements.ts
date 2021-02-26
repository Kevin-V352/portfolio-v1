/* <---Styled components dependencies---> */
import styled from 'styled-components';

/* <---React icons---> */
import { 
  FaGithub,
  FaCodeBranch, 
  FaLaptopCode, 
  FaPaperPlane, 
  FaUserCircle
} from 'react-icons/fa';

//Default settings for icons
const defaultConfigIcon = `
  font-size: 2rem;
  color: var(--gray);
  margin: 0 1.5rem;
`;

export const OptionButton = styled.button`
  display: flex;
  align-items: center;
  height: 5rem;
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const OptionText = styled.span`
  color: white;
  margin-left: 2rem;
  display: none;
  font-family: 'Text Me One', sans-serif;
`;

export const NavBarItem = styled.li`
  width: 100%;
  &:last-child {  
    margin-top: auto;
  } 
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
  width: 5rem;
  height: 100vh;
  position: fixed;
  background-color:var(--black);
  transition: var(--transition-time);
  &:hover {
    width: 13rem;
    transition: var(--transition-time);
    ${OptionText} {
      display: block;
    }
  }
  
`;

export const CodeBranchIcon = styled(FaCodeBranch)`
  ${defaultConfigIcon};
`;

export const LaptopCodeIcon = styled(FaLaptopCode)`
  ${defaultConfigIcon};
`;

export const PaperPlaneIcon = styled(FaPaperPlane)`
  ${defaultConfigIcon};
`;

export const UserCircleIcon = styled(FaUserCircle)`
  ${defaultConfigIcon};
`;

export const GitHubIcon = styled(FaGithub)`
  ${defaultConfigIcon};
`;





