import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100dvh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid: content;
        overflow-y: auto;
    }

    .tags{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;       
    }
  
`;


export const Form = styled.form`
    max-width: 55.0rem;
    margin: 3.8rem auto;

> header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3.6rem;

    button{
        font-size: 2.0rem;
        color: ${({theme}) => theme.COLORS.GRAY_100}
    }
}
`;