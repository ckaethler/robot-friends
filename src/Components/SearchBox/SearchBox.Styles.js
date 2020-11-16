import styled from 'styled-components';

export const SearchBoxContainerComponent = styled.div`
    margin: ${props => props.theme.margins.small};
`;


export const SearchBoxComponent = styled.input`
    transition: all .7s ease-in-out;
    -webkit-transition: all .7s ease-in-out;

    width: 20%;
    min-width: 28rem;
    padding: ${props => props.theme.margins.medium};
    border-radius: 2rem;
    border: 1px solid ${props => props.theme.colors.secondary.medium};
    font-size: ${props => props.theme.fontSizes.default};

    &:focus {
        width: 30%;
        outline: none;
        transform: scale(1.1);
        box-shadow: 1rem 1rem 2rem ${props => props.theme.colors.gray.light};
    }

    &:hover{
        width: 30%;
    }
`;