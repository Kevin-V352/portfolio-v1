/* <---Styled components dependencies---> */
import styled from 'styled-components';

/* <---React icons---> */
import {
	MdKeyboardArrowLeft,
	MdKeyboardArrowRight
} from 'react-icons/md';

// Slide Props
interface SProps {
	bgImg: string | null;
};

// ChangeButton Props
interface CBProps {
	position: string | null;
};

// ChangeButton Props
interface ISProps {
	width: number;
};

//Default settings for icons
const defaultConfigIcon: string = `
	font-size: 4rem;
`;

export const CarouselContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	background-color: var(--black);
`;

export const Slide = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background: center url('${(props: SProps) => props.bgImg}');
	animation: fade .2s ease-in-out;
	@keyframes fade {
		0%{
			opacity: 0;
			transform: scale(1);
		}
		50%{
			opacity: 0.5;
			transform: scale(1.05);
		}
		100%{
			opacity: 1;
			transform: scale(1);
		}
	}
`;

export const ChangeButton = styled.button`
	position: absolute;
	top: 50%;
	${(props: CBProps) => props.position};
	background-color: transparent;
	border: none;
	transition: var(--transition-fast);
	color: var(--gray);
	cursor: pointer;
	&:hover {
		transform: scale(1.5);
		transition: var(--transition-fast);
		color: white;
	};
	&:active {
		transform: scale(1);  
	};
`;

export const IndicatorBox = styled.div`
	display: flex;
	justify-content: space-around;
	position: absolute;
	width: 30%;
	height: .5%;
	bottom: 2%;
`;

export const IndicatorSlide = styled.div`
	width: ${(props: ISProps) => props.width}%;
	height: 100%;
	background-color: var(--gray);
	cursor: pointer;
	transition: var(--transition-fast);
	&:hover {
		transform: scaleY(4);
		transition: var(--transition-fast);
	};
`;	

export const LeftArrowIcon = styled(MdKeyboardArrowLeft)`
	${defaultConfigIcon};
`;

export const RightArrowIcon = styled(MdKeyboardArrowRight)`
	${defaultConfigIcon};
`;

