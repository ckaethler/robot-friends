import React from 'react';

import { CardComponent, CardBodyComponent, NameComponent, EmailComponent } 
    from './Card.Styles';

const Card = ({ id, name, email, imgUrl }) => (
    <CardComponent>
        <img src={imgUrl} alt="Robot Profile" />
        <CardBodyComponent>
            <NameComponent>{name}</NameComponent>
            <EmailComponent>{email}</EmailComponent>
        </CardBodyComponent>
    </CardComponent>
);

export default Card;