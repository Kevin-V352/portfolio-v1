/* <---React---> */
import React, { FC, useRef, useEffect } from "react";

/* <---Styled components---> */
import * as S from "./projects-elements";

/* <---Global elements---> */
import { CustomSection } from "../../../shared/styled-elements/global-styled-elements";

const Projetcs: FC = (): JSX.Element => {
  const slides = useRef<HTMLDivElement[]>([]);
  const indicatorSlides = useRef<HTMLDivElement[]>([]);

  let currentSlide: number = 1;

  const proyectsArr: string[] = [
    "./assets/img-slides/1s.jpg",
    "./assets/img-slides/2s.jpg",
    "./assets/img-slides/3s.jpg",
    "./assets/img-slides/4s.jpg",
  ];

  const changeSlide = (n: number): void => {
    const numberOfSlides: number = slides.current.length;

    if (n > numberOfSlides) {
      currentSlide = 1;
    }
    if (n < 1) {
      currentSlide = numberOfSlides;
    }
    for (let i = 0; i < numberOfSlides; i++) {
      slides.current[i].style.display = "none";
      indicatorSlides.current[i].style.backgroundColor = "var(--gray)";
    }
    slides.current[currentSlide - 1].style.display = "block";
    indicatorSlides.current[currentSlide - 1].style.backgroundColor = "white";
  };

  const newSlide = (n: number): void => {
    changeSlide((currentSlide += n));
  };

  const newIndicatorSlide = (slideIndex: number): void => {
    currentSlide = ++slideIndex;
    changeSlide(slideIndex);
  };

  const calculateGaugeWidth = (numberOfSlides: number): number => {
    return 100 / numberOfSlides - 1;
  };

  useEffect(() => {
    changeSlide(currentSlide);
  }, []);

  return (
    <CustomSection bgImg={null}>
      <S.CarouselContainer>
        {proyectsArr.map((img: string, index: number) => (
          <S.Slide
            key={index}
            bgImg={img}
            ref={(ref) =>
              slides.current.length < proyectsArr.length
                ? slides.current.push(ref!)
                : null
            }
          />
        ))}
        <S.ChangeButton position={"left: 0"} onClick={() => newSlide(-1)}>
          <S.LeftArrowIcon />
        </S.ChangeButton>
        <S.ChangeButton position={"right: 0"} onClick={() => newSlide(1)}>
          <S.RightArrowIcon />
        </S.ChangeButton>
        <S.IndicatorBox>
          {proyectsArr.map((x, index: number) => (
            <S.IndicatorSlide
              key={index}
              ref={(ref) =>
                indicatorSlides.current.length < proyectsArr.length
                  ? indicatorSlides.current.push(ref!)
                  : null
              }
              onClick={() => newIndicatorSlide(index)}
              width={calculateGaugeWidth(proyectsArr.length)}
            />
          ))}
        </S.IndicatorBox>
      </S.CarouselContainer>
    </CustomSection>
  );
};

export default Projetcs;
