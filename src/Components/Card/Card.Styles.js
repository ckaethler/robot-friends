import styled from 'styled-components';

export const CardComponent = styled.div`
    background-color: green;
    display: inline-block;
    border-radius: 3px;
    padding: 3rem;
    margin: 2rem;
    text-align: center;
    transition: all .5s;
    border: 1px solid black;
    box-shadow: 1rem 1rem 2rem 0 rgba(0, 0, 0, .2);

    &:hover {
        transform: scale(1.1);
        box-shadow: 1rem 1rem 3rem 0 rgba(0, 0, 0, .2);
    }
`;

export const CardBodyComponent = styled.div`
    h2 {
        font-size: 30px;
    }
`;

export const NameComponent = styled.h2``;

export const EmailComponent = styled.p``;