import styled from 'styled-components';

// ENTIRE CARD
export const CardComponent = styled.div`
    background-color: ${props => props.theme.colors.primary.medium};
    display: inline-block;
    border-radius: 1rem;
    padding: ${props => props.theme.margins.large};
    margin: ${props => props.theme.margins.large};
    text-align: center;
    transition: all .5s;
    box-shadow: 2rem 2rem 3rem 0 rgba(0, 0, 0, .3);

    &:hover {
        transform: scale(1.1);
        background-color: ${props => props.theme.colors.primary.light};
        box-shadow: 3rem 3rem 3rem 0 rgba(0, 0, 0, .2);
    }
`;

// CARD HEADER
export const CardHeaderComponent = styled.header`
    background-color: white;
`;

// CARD BODY
export const CardBodyComponent = styled.main`

    img {
        background-color: ${props => props.theme.colors.opacity.light};
        border-radius: 50%;
        margin: ${props => props.theme.margins.large} 0;
    }
`;

// CARD FOOTER
export const CardFooterComponent = styled.footer``;

// ROBOT NAME
export const NameComponent = styled.h2`
    font-family: ${props => props.theme.fonts.name};
`;

// ROBOT EMAIL
export const EmailComponent = styled.div`
    font-family: ${props => props.theme.fonts.email};

    h3 {
        text-decoration: underline;
        display: inline-block;
        font-size: 1.6rem;
    }
`;