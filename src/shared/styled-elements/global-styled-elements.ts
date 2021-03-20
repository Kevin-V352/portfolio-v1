/* 【Ｓｔｙｌｅｄ　ｅｌｅｍｅｎｔｓ】 */

/* <---Styled components dependencies---> */
import styled from 'styled-components';

/* <---Prop types---> */

// Custom Section Props
interface CSProps {
    bgImg: string | null;
};

export const CustomSection = styled.div`
    height: 100vh;
    width: 100%;
    background-size: cover;
    background: fixed center url('${(props: CSProps) => props.bgImg}');
`;