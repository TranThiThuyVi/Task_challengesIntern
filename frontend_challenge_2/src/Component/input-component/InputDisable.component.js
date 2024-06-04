import React from 'react';
import {TextField} from '@mui/material';
import '../../assets/css/input.css';

const InputDisable = () => {
    return (
        <>
            <h3>Input Disable</h3>
            {/* <input /> */}
            <p>use input</p>
            <div className='ipt'>
                <label>
                    Label
                    <input type="text" defaultValue="Placeholder" disabled />
                </label>
            </div>

            {/* <TextField /> */}
            <p>use TextField</p>
            <div className='ipt'>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue="Placeholder"
                />
                <TextField
                    disabled
                    id="filled-disabled"
                    label="Disabled"
                    defaultValue="Placeholder"
                    variant="filled"
                />
            </div>
        </>
    );
};

export default InputDisable;
