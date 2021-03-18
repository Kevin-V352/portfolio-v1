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

export const CarouselContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: red;
	position: relative;
`;

export const Slide = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background: center url('${(props: SProps) => props.bgImg}');
`;

export const ChangeButton = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	${(props: CBProps) => props.position};
`;

export const LeftArrowIcon = styled(MdKeyboardArrowLeft)`
	color: red;
`;

export const RightArrowIcon = styled(MdKeyboardArrowRight)`
	color: red;
`;