import React from 'react';

import { CardListComponent } from './CardList.Styles';
import Card from '../Card/Card.Component';

const CardList = ({ robots }) => (
    <CardListComponent>
        {
            robots.map((robot, index) => (
                <Card 
                    key={`robot-${index}`}
                    name={robot.name} 
                    id={robot.id} 
                    imgUrl={`https://robohash.org/${robot.id}?200x200`}
                    email={robot.email}
                />
            ))
        }
    </CardListComponent>
);

export default CardList;