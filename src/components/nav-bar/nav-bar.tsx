/* <---React---> */
import React, { FC } from 'react';

/* <---Styled components---> */
import { 
	GitHubIcon,
	NavBarList, 
	NavBarItem, 
	NavBarContainer,
	CodeBranchIcon,
	LaptopCodeIcon,
	PaperPlaneIcon,
	UserCircleIcon,
	OptionText,
	OptionButton,
} from './nav-bar-elements';



const NavBar: FC = (): JSX.Element => {
    return (
        <NavBarContainer>
					<NavBarList>
						<NavBarItem>
							<OptionButton>
								<PaperPlaneIcon/>
								<OptionText>Contacto</OptionText>
							</OptionButton>
						</NavBarItem>
						<NavBarItem>
							<OptionButton>
								<CodeBranchIcon/>
								<OptionText>Proyectos</OptionText>
							</OptionButton>
						</NavBarItem>
						<NavBarItem>
							<OptionButton>
								<UserCircleIcon/>
								<OptionText>Yo</OptionText>
							</OptionButton>
						</NavBarItem>
						<NavBarItem>
							<OptionButton>
								<LaptopCodeIcon/>
								<OptionText>Stack</OptionText>
							</OptionButton>
						</NavBarItem>
						<NavBarItem>
							<OptionButton>
								<GitHubIcon/>
								<OptionText>GitHub</OptionText>
							</OptionButton>
						</NavBarItem>
					</NavBarList>
				</NavBarContainer>
    );
};

export default NavBar;