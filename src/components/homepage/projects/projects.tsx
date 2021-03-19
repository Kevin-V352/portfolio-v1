/* <---React---> */
import React, { FC, useRef, useState, useEffect } from "react";

/* <---Styled components---> */
import * as S from "./projects-elements";

/* <---Global elements---> */
import { CustomSection } from "../../../shared/styled-elements/global-styled-elements";

const Projetcs: FC = (): JSX.Element => {

  const slides = useRef<HTMLDivElement[]>([]);
  const indicatorSlides = useRef<HTMLDivElement[]>([]);

  let currentSlide: number = 1; 

  const arr: string[] = [
    "./assets/img-slides/1s.jpg",
    "./assets/img-slides/2s.jpg",
    "./assets/img-slides/3s.jpg",
    "./assets/img-slides/4s.jpg"
  ];

  const carousel = (n: number) => {
    if(n > slides.current.length) {
      currentSlide = 1;
    };
    if(n < 1) {
      currentSlide = slides.current.length;
    };
    for(let i = 0; i < slides.current.length; i++) {
      slides.current[i].style.display = "none";
      indicatorSlides.current[i].style.backgroundColor = "var(--gray)";
    };
    slides.current[currentSlide - 1].style.display = "block";
    indicatorSlides.current[currentSlide - 1].style.backgroundColor = "white";
   /*  setTimeout(() => {
      newSlide(1);
    }, 15000); */
  };

  const newSlide = (n: number) => {
    carousel(currentSlide += n);
	};

  const newIndicatorSlide = (n: number) => {
    currentSlide = n;
    carousel(n);
  };

  const calculateGaugeWidth = (n: number) => {
    return ((100 / n) - 1);
  };

  useEffect(() => {
    carousel(currentSlide);
  }, []);

  return (
    <CustomSection bgImg={null}>
      <S.CarouselContainer>
        {arr.map((img: string, index: number) => (
          <S.Slide
            key={index}
            bgImg={img}
            ref={(ref) => slides.current.length < arr.length ? slides.current.push(ref!): null}
          />
        ))}
        <S.ChangeButton position={"left: 0"} onClick={() => newSlide(-1)} >
          <S.LeftArrowIcon/>
        </S.ChangeButton>
        <S.ChangeButton position={"right: 0"} onClick={() => newSlide(1)}>
          <S.RightArrowIcon />
        </S.ChangeButton >
        <S.IndicatorBox>
          {
            arr.map((undefined, index: number) => (
              <S.IndicatorSlide 
                key={index}
                ref={(ref) => indicatorSlides.current.length < arr.length ? indicatorSlides.current.push(ref!): null}
                onClick={() => newIndicatorSlide(index + 1)}
                width={calculateGaugeWidth(arr.length)}
              />
            ))
          }
        </S.IndicatorBox>
      </S.CarouselContainer>
    </CustomSection>
  );
};

export default Projetcs;
