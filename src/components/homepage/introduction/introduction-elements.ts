import styled from 'styled-components';

import { GiProtectionGlasses } from 'react-icons/gi';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--gray);	
	margin-top: 2rem;

  //Screen smaller than 600px - mobile
	@media (max-width: 600px) {
		height: calc(100% - 10rem);
		width: 90%;
	};

	//Medium screens (600px - 1024px) - tablets
	@media (min-width: 600px) {
		height: calc(100% - 14rem);
		width: 90%;
	};

	//Screen greater than 1024px - desktop
  @media (min-width: 1024px) {
		width: 70%;
		height: 100%;
	};
`;

export const Title = styled.h1`
	text-transform: uppercase;
	color: var(--gray);
	border-bottom: .15rem solid var(--gray);
	width: 100%;
	text-align: center;
	margin: 0;
	font-size: var(--primary-font-size);
`;

export const GlassesIcon = styled(GiProtectionGlasses)`
    font-size: 8rem;
`;

export const Subtitle = styled.h2`
    font-size: var(--primary-font-size);
    margin: .5rem;
`;

export const Description = styled.p`
    font-size: var(--secondary-font-size);
    text-transform: uppercase;
    text-align: center;
`;
