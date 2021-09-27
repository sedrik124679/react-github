import React, {useContext, useState} from 'react';
import {AlertContext} from "../../context/alertContext/AlertContext";
import {GitHubContext} from "../../context/github/GitHubContext";

const Search = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(GitHubContext)

    const onSubmit = (event) => {
        if(event.key !== 'Enter'){
            return
        }

        github.clearUsers()

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('Будь ласка, введіть дані користувача!')
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