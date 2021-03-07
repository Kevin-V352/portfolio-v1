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
`;

export const Label = styled.label`
    color: var(--gray);
    text-transform: uppercase;
    font-size: 1.2rem;
`;

export const Input = styled.input`
    ${defaultConfigInput};
`;

export const TextArea = styled.textarea`
    ${defaultConfigInput};
    height: 10rem;
`;

export const SubmitButton = styled.button`
    border-radius: .3rem;
    border: none;
    background-color: var(--gray);
    font-size: 1.5rem;
`;