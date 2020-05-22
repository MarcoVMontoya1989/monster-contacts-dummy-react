import React from 'react';

import CardComponent from "../card/card.component";

import './cardList.css';

const CardListComponent = (props) => {
    console.log(props.monsters);
    return (
        <div className='card-list'>
            {
                props.monsters.map(monster => (
                    <CardComponent monster={monster}/>
                ))
            }
        </div>
    );
};

export default CardListComponent;