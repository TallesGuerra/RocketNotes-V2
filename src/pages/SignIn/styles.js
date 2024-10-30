import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    align-items: stretch;  

    @media(max-width:660px) {
        display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }

`;

export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1{
        font-size: 4.8rem;
        font-weight: 700;

        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > h2 {
        font-size: 2.4rem;
        margin: 4.8rem 0;
    }

    > p{
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    
    > a {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};

        margin-top: 12.4rem;
    }

    @media(max-width: 660px){
        padding: 0 2rem;
    }

`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

    opacity: 0.7;

    @media (max-width:660px) {
        display: none;
    }
    
`;