import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

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
  
    @media(max-width:660px) {
    padding: 0 1.5rem;   
    
        
         h1{       
           font-size: 1.5rem;
        }

       h2{
        margin: 1.5rem 0;
        
            font-size: 1.5rem;
        }
      
        button{
            margin-top: 0;
        }
     
    
        > header{
            padding: 0rem;
        
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


export const Form = styled.form`
    max-width: 55.0rem;
    margin: 3.8rem auto;

> header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: .6rem;
   

    button{
        font-size: 2.0rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100}
    }

    @media(max-width: 660px){
        font-size: 1rem;
        margin-bottom: 1rem;
        
       
        button{
            font-size: 1.5rem;
            
        }
      
    }

}
`;