import React from 'react';

export const CardListPErs = ({ id, name, image }) => {
    return (
        <div>
            <div className='Personaje'>
                <img src={image} alt={id} className='imgCard' />
                <span className='titlePer'>{name}</span>
            </div>
        </div>
    )
}
