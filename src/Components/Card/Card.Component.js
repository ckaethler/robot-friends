import React from 'react';

import { CardComponent, CardBodyComponent, CardTitle,
    CardHeaderComponent, CardFooterComponent, EmailComponent} from './Card.Styles';

import Table from '../Table/Table.Component';

const Card = ({ id, name, imgUrl, ...robot }) => (
    <CardComponent>
        {/* Card Header */}
        <CardHeaderComponent>
            <CardTitle>{name}</CardTitle>
        </CardHeaderComponent>
        
        {/* Card Body */}
        <CardBodyComponent>
            <img src={imgUrl} alt="Robot Profile" />
            <Table columns={['name', 'email']} />
        </CardBodyComponent>

        {/* Card Footer */}
        <CardFooterComponent>
            <EmailComponent>
                <h3>Email:</h3> {robot.email}
            </EmailComponent>
        </CardFooterComponent>
    </CardComponent>
);

export default Card;