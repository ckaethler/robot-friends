import styled from 'styled-components';

export const AppComponent = styled.div`
    font-size: 1.6rem;
    text-align: center;
    font-family: ${props => props.theme.fonts.body};
`;

export const NavigationComponent = styled.nav`
    padding: ${props => props.theme.margins.large};
    margin-bottom: ${props => props.theme.margins.huge};
    width: 100%;
`;

export const AppTitleComponent = styled.h1`
    padding: ${props => props.theme.margins.large};
    font-size: ${props => props.theme.fontSizes.huge};
    font-family: ${props => props.theme.fonts.logo};
    color: ${props => props.theme.colors.primary.light};
    text-decoration: underline;

    transition: all .5s ease-in-out;

    &:hover {
        animation: ${props => props.rotate} 2s linear infinite;
    }
`;
