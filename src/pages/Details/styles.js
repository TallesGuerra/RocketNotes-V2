import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;

        padding: 6.4rem 0;
    }

    @media(max-width:660px) {  
        overflow: scroll;
        display: flex;
        flex-direction: column;   
        padding: 0 1rem;

     >main{
        padding: 1rem ;
        
        h1{
           font-size: 2rem;
        }

        p, li{
            font-size: 1.3rem;
        }

        h2, button{
            font-size: 1.5rem;
        }
      
        button:nth-child(1){
            margin-bottom: -3.5rem;
        }
     }   
    
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
    }
`;

export const Links = styled.ul` 
    list-style: none;

    > li {
        margin-top: 1.2rem;   
        

        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Content = styled.div`
    max-width: 55.0rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    
    > button:first-child {
        align-self: end;
       
    }

    > h1{
        font-size: 3.6rem;
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.WHITE};

        padding-top: 6.4rem;       
    }

    > p{
        font-size: 1.6rem;
        font-weight: 200;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-top: 1.6rem;       

    }
   
`;