import styled from "styled-components";

export const Container = styled.section`
    margin: 2.8rem 0;

    > h2{
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACkGROUND_700};

        padding-bottom: 1.6rem;
        margin-bottom: 2.8rem;

        counter-reset: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 2.0rem;
        font-weight: 400;

    

    }
`;