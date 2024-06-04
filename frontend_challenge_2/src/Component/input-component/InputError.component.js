import React from 'react';
import {TextField} from '@mui/material';
import '../../assets/css/input.css';

const InputError = () => {
    return (
        <>
            <h3>Input Error</h3>
            {/* <input /> */}
            <p>use input</p>
            <div className='ipt'>
                <label className="red-label">
                    Label
                    <input type="text" defaultValue="Placeholder" className="error" />
                </label>
            </div>

            {/* <TextField /> */}
            <p>use TextField</p>
            <div className='ipt'>
                <TextField
                    error
                    id="outlined-error"
                    label="Error"
                    defaultValue="Placeholder"
                />
            </div>
        </>
    );
};

export default InputError;
