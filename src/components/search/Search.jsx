import React, {useContext, useState} from 'react';
import {AlertContext} from "../../context/alertContext/AlertContext";

const Search = () => {
    const [value, setValue] = useState('')
    const {show} = useContext(AlertContext)
    const onSubmit = (event) => {
        if(event.key !== 'Enter'){
            return
        }
        if (value.trim()) {
            console.log('make request to api', value)
        } else {
            show('Будь ласка, введіть дані користувача!')
        }
    }

    return (
        <div className='form-group'>
            <input
                type="text"
                className='form-control'
                placeholder='Enter nickname of user'
                onKeyPress={onSubmit}
                value={value}
                onChange={(event) => setValue(event.target.value)}/>
        </div>
    );
};

export default Search;