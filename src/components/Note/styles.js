import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    

    border: none;
    border: 1.0rem;

    padding: 2.2rem;
    margin-bottom: 1.6rem;  

    > h1 {
        flex: 1;
        text-align: left;

        font-weight: 700;
        font-size: 2.4rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > footer{
        width: 100%;
        display: flex;
        margin-top: 2.4rem;      
    }
    
    @media(max-width:660px){
      h1{
        font-size: 1.5rem;
      }         
        
    }
`