/* <---React---> */
import React, { FC, useState, useRef, useEffect } from "react";

/* <---Styled components---> */
import {
  ContactContent,
  TitleContact,
  ContactColumn,
	ContactTab,
	ContactHeader,
	ButtonTab,
  Maker,
  ContactOptions,
} from "./contact-elements";

/* <---Components---> */
import ContactForm from "../contact-form/contact-form";
import ContactLinks from "../contact-links/contact-links";

/* <---Global elements---> */
import { CustomSection } from "../../../../shared/styled-elements/global-styled-elements";


const Contact: FC = () => {

  const tableOptions: string[] = ['Enlaces', 'Mensaje directo', 'Información'];

  const maker = useRef<HTMLDivElement>(null);
  const option = useRef<HTMLButtonElement[]>([]);

  const [indexTab, setIndexTab] = useState<number>(1);

  const changeMaker = (target: any) => {
    maker.current!.style.left = `${target.offsetLeft}px`;
    maker.current!.style.width = `${target.offsetWidth}px`;
  };

  useEffect(() => {
    option.current.forEach(button => {
      button.addEventListener('click', (e) => {
         changeMaker(e.target);
      })
    })
    option.current[0].click();
  },[]);
  
  return (
    <CustomSection bgImg={"./assets/4b.jpg"}>
      <ContactContent>
        <ContactColumn>
          <TitleContact>Contacto</TitleContact>
					<ContactTab>
						<ContactHeader>
              <ContactOptions>
                {
                  tableOptions.map((tableOption: string, index: number) => (
                    <ButtonTab key={index} ref={ref => option.current.push(ref!)} onClick={() => setIndexTab(index)} active={indexTab === index ? true : false}>{tableOption}</ButtonTab>
                  ))
                }
              </ContactOptions>
              <Maker ref={maker}/>
						</ContactHeader>  
					</ContactTab>
          { indexTab === 0 ? <ContactLinks/> : <ContactForm/> } 
        </ContactColumn>
      </ContactContent>
    </CustomSection>
  );
};

export default Contact;
