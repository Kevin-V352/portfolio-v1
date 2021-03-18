/* <---React---> */
import React, { FC, useState, useRef, useEffect } from "react";

/* <---Styled components---> */
import * as S from './selector-table-elements';

/* <---React transition group---> */
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* <---Components---> */
import Form from '../direct-message/direct-message';
import Links from '../links/links';

const SelectorTable: FC = (): JSX.Element => {

	const tableOptions: string[] = ['Mensaje directo', 'Enlaces'];

	const [indexTab, setIndexTab] = useState<number>(0);

	const maker = useRef<HTMLDivElement>(null);
  const option = useRef<HTMLButtonElement[]>([]);

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
    <S.Container>
      <S.Header>
        <S.Options>
          {tableOptions.map((tableOption: string, index: number) => (
            <S.OptionButton
              key={index}
              ref={(ref) => option.current.push(ref!)}
              onClick={() => setIndexTab(index)}
              active={indexTab === index ? true : false}
            >
              {tableOption}
            </S.OptionButton>
          ))}
        </S.Options>
        <S.OptionMaker ref={maker} />
      </S.Header>
      <TransitionGroup component={S.TransitionBox}>
        {
          indexTab === 0 ? 
          <CSSTransition key={1} timeout={200} classNames="fade">
            <Form/>
          </CSSTransition>
          : 
          <CSSTransition key={2} timeout={200} classNames="fade">
            <Links/>
          </CSSTransition>
        }
      </TransitionGroup>
    </S.Container>
  );
};

export default SelectorTable;
