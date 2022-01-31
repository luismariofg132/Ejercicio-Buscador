import { useState } from 'react';

const useForm = (initialState = {}) => {
    const [values, setvalues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setvalues({
            ...values,
            [target.name]: target.value
        })
    }

    const resetForm = () => {
        setvalues(initialState)
    }

    return [values, handleInputChange, resetForm]

};

export default useForm;
