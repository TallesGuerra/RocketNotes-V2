import styled  from 'styled-components';

export const Container = styled.span`
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 1.2rem;

    padding: 0.5rem 1.4rem;
    margin-right: 0.6rem;

    border-radius: 0.5rem;

`;