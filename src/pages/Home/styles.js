import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    display: grid;
    grid-template-columns: 25.0rem auto;
    grid-template-rows: 10.5rem 12.8rem auto 6.4rem;

    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newNote content";

    background-color: ${({ theme }) => theme.BACKGROUND_800};

    

`;

export const Brand = styled.ul`
    grid-area: brand;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.BACKGROUND_700};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1{
        color: ${({ theme }) => theme.COLORS.ORANGE};

        font-size: 2.4rem;
        font-weight: 700;
    }
    
`;

export const Menu = styled.ul`
    grid-area: menu;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding-top: 6.4rem;
    text-align: center;

    > li {
        margin-bottom: 2.4rem;       
        
    }

    
     
`;

export const Search = styled.div`
     grid-area: search;
     padding:6.4rem 6.4rem 0;
     
`;

export const Content = styled.div`
     grid-area: content;
     padding: 0 6.4rem;     

     overflow-y: auto;
     
     ;
`;

export const NewNote = styled(Link)`
     grid-area: newNote;
     
     background-color: ${({ theme }) => theme.COLORS.ORANGE};
     background-color: ${({ theme }) => theme.BACKGROUND_900};

     border: none;

     display: flex;
     align-items: center;
     justify-content: center;
    
    > svg {
        margin: 0.8rem;
    }
`;

