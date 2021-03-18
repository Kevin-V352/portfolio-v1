/* <---React---> */
import React, { FC, useRef, useState, useEffect } from "react";

/* <---Styled components---> */
import * as S from "./projects-elements";

/* <---Global elements---> */
import { CustomSection } from "../../../shared/styled-elements/global-styled-elements";

const Projetcs: FC = (): JSX.Element => {

	const slides = useRef<HTMLDivElement[]>([]);

	const [selectedSlide, setSeletctedSlide] = useState<number>(1);

	const arr: string[] = [
		'./assets/img-slides/1s.jpg',
		'./assets/img-slides/2s.jpg',
		'./assets/img-slides/3s.jpg',
		'./assets/img-slides/4s.jpg'
	];

	const changeSlide = (index: number) => {
		if(index > slides.current.length) {
			setSeletctedSlide(1);
		}
		else if(index < 1) {
			setSeletctedSlide(slides.current.length);
		}
		for (let i = 0; i < slides.current.length; i++) {
			slides.current[i].style.display = "none";
		};
		slides.current[selectedSlide - 1].style.display = "flex";
	};

	const newSlide = (n: number) => {
		setSeletctedSlide(selectedSlide + n);
		changeSlide(selectedSlide);
	};

	useEffect(() => {
		changeSlide(1);
	}, []);

  return (
    <CustomSection bgImg={null}>
      <S.CarouselContainer>
				{
					arr.map((img: string, index: number) => (
						<S.Slide key={index} bgImg={img} ref={(ref) => slides.current.push(ref!)}/>
					))
				}
				<S.ChangeButton position={null} onClick={() => newSlide(-1)}>
					<S.LeftArrowIcon/>
				</S.ChangeButton>
				<S.ChangeButton position={"right: 0"} onClick={() => newSlide(1)}>
					<S.RightArrowIcon/>
				</S.ChangeButton>
			</S.CarouselContainer>
    </CustomSection>
  );
};

export default Projetcs;
