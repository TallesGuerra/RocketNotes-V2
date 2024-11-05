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

    @media(max-width:660px) {  
        overflow: scroll;
        display: flex;
        flex-direction: column;
    
   
    
    > header{
            padding: 1.5rem;

            div span,
            div strong
            {
                font-size: 1.5rem;
            }    

            > button svg{
            font-size: 2.5rem;
            }

   
    }

    ul{
        padding: 1rem;        
        list-style-type: none;      
   
        
    }

    }
    
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
     

     @media(max-width:660px){
        padding:  1.5rem;     
     }
     
`;

export const Content = styled.div`
     grid-area: content;
     padding: 0 6.4rem;     

    

     @media(max-width:660px){    
        padding: 0 1.5rem;    
        overflow-y: none;      

        margin: 0;      
       
     }
     
     ;
`;

export const NewNote = styled(Link)`
     grid-area: newNote;
     
     background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITE};;

     border: none;

     display: flex;
     align-items: center;
     justify-content: center;  
    
    > svg {
        margin: 0.8rem;
    }

    @media(max-width:660px){    
        margin-bottom: 4.0rem;  

     }
`;

