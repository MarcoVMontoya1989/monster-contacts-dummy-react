import React from 'react';

import './card.css';

const CardComponent = (props) => {
    console.log(props);
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set${props.monster.id}&size=180x180`}
                 alt="monster"/>
            <h2
                key={props.monster.id}>
                {props.monster.name}
            </h2>
            <p>{props.monster.email}</p>
        </div>
    );
};

export default CardComponent;