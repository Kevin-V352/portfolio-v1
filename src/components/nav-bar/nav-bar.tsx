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
	OptionContent,
	StackCodeIcon,
	CodeBranchIcon,
	NavBarContainer
} from './nav-bar-elements';


const NavBar: FC = (): JSX.Element => {
    return (
        <NavBarContainer>
			<NavBarList>
				<NavBarItem>
					<OptionContent>
						<UserIcon/>
						<OptionText>Yo</OptionText>
					</OptionContent>
				</NavBarItem>
				<NavBarItem>
					<OptionContent>
						<CodeBranchIcon/>
						<OptionText>Proyectos</OptionText>
					</OptionContent>
				</NavBarItem>
				<NavBarItem>
					<OptionContent>
						<StackCodeIcon/>
						<OptionText>Stack</OptionText>
					</OptionContent>
				</NavBarItem>
				<NavBarItem>
					<OptionContent>
						<ContactIcon/>
						<OptionText>Contacto</OptionText>
					</OptionContent>
				</NavBarItem>
				<NavBarItem>
					<OptionContent>
						<GitHubIcon/>
						<OptionText>GitHub</OptionText>
					</OptionContent>
				</NavBarItem>
			</NavBarList>
		</NavBarContainer>
    );
};

export default NavBar;