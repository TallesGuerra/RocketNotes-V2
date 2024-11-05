import styled from "styled-components";

export const Container = styled.div`
    width: 100%;


    > header{
        width: 100%;
        height: 14.4rem;

        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 12.4rem;

        svg{
            width: 2.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        button{
            background: none;
            border: none;

        }
        
        @media(max-width:660px) {            
            padding: 0 3.5rem; 
            height: 12.4rem;      

            svg{
                width: 1.8rem;           

            }         
        
    }
    }`;

export const Form = styled.form`
    max-width: 34.0rem;
    margin: 3.0rem auto 0 ;

    > div:nth-child(4){
        margin-top: 2.4rem;
    }

    button{       
        opacity: 0.8;  
        
    }

    @media(max-width: 660px){
        padding: 0 2rem;       
    }

`;

export const Avatar = styled.div`
    position: relative;

    margin: -12.5rem auto 3.2rem;
    
    height: 18.6rem;
    width: 18.6rem;

> img{

    height: 18.6rem;
    width: 18.6rem;
    border-radius: 50%;
}

> label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;
    
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;
    

    input {
        display: none;
    }

    svg{
        width: 2.0rem;
        height: 2.0rem;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
}

@media(max-width: 660px){    
    img{
height: 15.6rem;
width: 15.6rem;

}

> label {
position: absolute;
bottom: 2.3rem;
right: 2.3rem;

       
    }
}
`;