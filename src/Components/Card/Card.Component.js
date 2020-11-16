import React from 'react';

import { CardComponent, CardBodyComponent, NameComponent, EmailComponent,
    CardHeaderComponent, CardFooterComponent} from './Card.Styles';

const Card = ({ id, name, email, imgUrl }) => (
    <CardComponent>
        {/* Card Header */}
        <CardHeaderComponent>
            <NameComponent>{name}</NameComponent>
        </CardHeaderComponent>
        
        {/* Card Body */}
        <CardBodyComponent>
            <img src={imgUrl} alt="Robot Profile" />
        </CardBodyComponent>

        {/* Card Footer */}
        <CardFooterComponent>
            <EmailComponent>
                <h3>Email:</h3> {email}
            </EmailComponent>
        </CardFooterComponent>
    </CardComponent>
);

export default Card;