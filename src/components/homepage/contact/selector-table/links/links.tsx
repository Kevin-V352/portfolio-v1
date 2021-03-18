/* <---React---> */
import React, { FC, useState, useEffect } from "react";

/* <---Styled components---> */
import * as S from "./links-elements";

const Links: FC = (): JSX.Element => {

  interface LA {
    link: string;
    component: any;
  }

  const linksArr: LA[] = [
    {
      link: "KDG",
      component: <S.LinkedinIcon />,
    },
    {
      link: "BxK",
      component: <S.WhatsappIcon />,
    },
    {
      link: "eNR",
      component: <S.TelegramIcon />,
    },
  ];

  const [largeScreen, setLargeScreen] = useState<boolean>(true);

  const disableExteriorWindow = (): any => {
    if(window.innerWidth < 600) {
      setLargeScreen(false);
    };
  };

  useEffect(() => {
    disableExteriorWindow();
  }, []);

  /* window.addEventListener('resize', disableExteriorWindow()); */

  return (
    <S.Container>
      <S.Description>Redes sociales</S.Description>
      <S.LinkCotainer>
        {linksArr.map((item, index: number) => (
          <S.ButtonIcon key={index}>
            <a
              href={`https://ya.co.ve/${item.link}`}
              rel={largeScreen ? "noopener noreferrer" : undefined}
              target={largeScreen ? "_blank" : undefined}
            >
              {item.component}
            </a>
          </S.ButtonIcon>
        ))}
        <S.ButtonIcon>
          <a href="mailto:kevinvega2070@gmail.com">
            <S.MailIcon />
          </a>
        </S.ButtonIcon>
      </S.LinkCotainer>
    </S.Container>
  );
};

export default Links;
