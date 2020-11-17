import React from 'react';

import { CardListComponent } from './CardList.Styles';
import Card from '../Card/Card.Component';

const CardList = ({ robots }) => {
    // if (true) throw new Error("NOOOO");
    return (
        <CardListComponent>
            {
                robots.map((robot, index) => (
                    <Card 
                        // external API for profile images
                        imgUrl={`https://robohash.org/${robot.id}?200x200`}
                        key={`robot-${index}`}
                        {...robot}
                    />
                ))
            }
        </CardListComponent>
    )
};

export default CardList;