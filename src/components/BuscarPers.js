import React from 'react';
import useForm from '../hooks/useForm';
import querystring from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom'
import { CardListPErs } from './CardListPers';
import getPersonByName from '../selectors/getPersonByName';

const BuscarPers = ({ datos }) => {

    const navigate = useNavigate()
    const location = useLocation()
    const { q = '' } = querystring.parse(location.search);

    const [values, handleInputChange] = useForm({
        name: q
    })

    const { name } = values
    const personFilter = getPersonByName(datos, name)
    console.log(personFilter)

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`?q=${name}`)
    }

    return <div>
        <div className='divForm'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Buscar Personaje' name='name' onChange={handleInputChange} value={name} />
            </form>
        </div>
        {
            personFilter.map(per => (
                <CardListPErs image={per.image} id={per.id} name={per.name} key={per.id} />
            ))
        }
    </div>;


};

export default BuscarPers;
