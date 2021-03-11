/* <---Styled components dependencies---> */
import styled from 'styled-components';

//Default settings for inputs
const defaultConfigInput: string = `
    border-radius: .3rem;
    border: none;
    margin-bottom: 1rem;
    font-size: 1rem;
    background-color: var(--transparent-gray);
    color: white;
    padding: .5rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 3rem);
`;

export const Label = styled.label`
    color: var(--gray);
    text-transform: uppercase;
`;

export const Input = styled.input`
    ${defaultConfigInput};
`;

export const TextArea = styled.textarea`
    ${defaultConfigInput};
    height: calc(95% - 10.4rem);
`;

export const SubmitButton = styled.button`
    border-radius: .3rem;
    border: .15rem solid var(--gray);
    background-color: var(--black);
    color: var(--gray);
    font-size: 1.5rem;
    text-transform: uppercase;
    transition: var(--transition-fast);
    &:hover {
        transition: var(--transition-fast);
        transform: scale(1.01);
        border-color: var(--orange);
        color: var(--orange);
    }
    &:active {
        transform: scale(0.99);
    }
`;