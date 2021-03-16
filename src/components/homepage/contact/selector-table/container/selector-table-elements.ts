/* <---Styled components dependencies---> */
import styled from 'styled-components';

//ButtonTab props
interface BTProps {
    active: boolean;
};

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 2rem);
`;

export const Header = styled.div`
    position: relative; 
    margin-bottom: 1rem;
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const OptionButton = styled.button`
    border: none;
    background-color: transparent;
    margin-top: 1rem;
    text-transform: uppercase;
    color: ${(props: BTProps) => props.active ? 'white;' : 'var(--gray);'};
    font-size: var(--secondary-font-size);
`;

export const OptionMaker = styled.div`
    position: absolute;
    border-bottom: .15rem solid var(--orange);
    transition: var(--transition-normal);
`;

export const ResultContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 17rem;
`;