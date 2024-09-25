import styled from "styled-components";

export const Container = styled.button `
    width: 100%;
    height: 5.6rem;

    padding: 0 1.6rem;
    margin-top: 1.6rem;

    border-radius: 1.0rem;
    border: none;

    
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    letter-spacing: 3px;
    font-weight: 500;
    
   


    &:disabled{
        opacity: 0.5;
        cursor: pointer;
    }
`;