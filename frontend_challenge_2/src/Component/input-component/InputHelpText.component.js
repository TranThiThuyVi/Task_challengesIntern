import React from 'react';
import {TextField} from '@mui/material';
import '../../assets/css/input.css';

const InputHelpText = () => {
    return (
        <>
            <h3>Input Help Text</h3>
            {/* <input /> */}
            <p>use input</p>
            <div className='ipt'>
                <label>
                    Label
                    <input type="text" defaultValue="Placeholder" />
                    <span className="helper-text-1">Some interesting text</span>
                </label>
                <label className="red-label">
                    Label
                    <input type="text" defaultValue="Placeholder" className="error" />
                    <span className="helper-text">Some interesting text</span>
                </label>
            </div>

            {/* <TextField /> */}
            <p>use TextField</p>
            <div className='ipt'>
                <TextField
                    id="outlined-helperText"
                    label="Label"
                    defaultValue="Placeholder"
                    helperText="Some interesting text"
                />
                <TextField
                    error
                    id="outlined-error-helper-text"
                    label="Label"
                    defaultValue="Hello World"
                    helperText="Some interesting text"
                />
                <TextField
                    error
                    id="filled-error-helper-text"
                    label="Label"
                    defaultValue="Placeholder"
                    helperText="Some interesting text"
                    variant="filled"
                />
            </div>
        </>
    );
};

export default InputHelpText;
