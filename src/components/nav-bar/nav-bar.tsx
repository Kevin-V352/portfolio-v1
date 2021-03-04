/* <---React---> */
import React, { FC } from 'react';

/* <---Styled components---> */
import { 
	UserIcon,
	OptionText,
	GitHubIcon,
	NavBarList, 
	NavBarItem, 
	ContactIcon,
	OptionButton,
	StackCodeIcon,
	CodeBranchIcon,
	NavBarContainer
} from './nav-bar-elements';


const NavBar: FC = (): JSX.Element => {
    return (
        <NavBarContainer>
			<NavBarList>
				<NavBarItem>
					<OptionButton>
						<UserIcon/>
						<OptionText>Yo</OptionText>
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
						<StackCodeIcon/>
						<OptionText>Stack</OptionText>
					</OptionButton>
				</NavBarItem>
				<NavBarItem>
					<OptionButton>
						<ContactIcon/>
						<OptionText>Contacto</OptionText>
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