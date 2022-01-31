import React from 'react';

const CardPersonaje = ({ datos }) => {
    return <div>
        {
            datos.map(per => (
                <div className='Personaje' key={per.id} >
                    <img className='imgCard' src={per.image} alt={per.name} />
                    <span className='titlePer'>{per.name}</span>
                </div>
            ))
        }
    </div>;
};

export default CardPersonaje;
