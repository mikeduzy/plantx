import React from 'react';
import CardItem from '.components/CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Orchidee</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards