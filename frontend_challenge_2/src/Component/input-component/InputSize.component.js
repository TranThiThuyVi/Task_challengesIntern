import React from 'react';
import {TextField} from '@mui/material';
import '../../assets/css/input.css';

const InputSize = () => {
    return (
        <>
            <h3>Input Size</h3>
            <p>use input</p>
            {/* <input /> */}
            <div className='ipt'>
                <label>
                    Label
                    <input type="text" class="small-input" defaultValue="Placeholder" />
                </label>
                <label>
                    Label
                    <input type="text" id="outlined-size-normal" defaultValue="Normal" />
                </label>
            </div>

            {/* <TextField /> */}
            <p>use TextField</p>
            <div className='ipt'>
                <TextField
                    label="Label"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                />
                <TextField label="Label" id="outlined-size-normal" defaultValue="Normal" />
            </div>
            <div className='ipt'>
                <TextField
                    label="Label"
                    id="filled-size-small"
                    defaultValue="Small"
                    variant="filled"
                    size="small"
                />
                <TextField
                    label="Label"
                    id="filled-size-normal"
                    defaultValue="Normal"
                    variant="filled"
                />
            </div>
            <div className='ipt'>
                <TextField
                    label="Label"
                    id="standard-size-small"
                    defaultValue="Small"
                    size="small"
                    variant="standard"
                />
                <TextField
                    label="Label"
                    id="standard-size-normal"
                    defaultValue="Normal"
                    variant="standard"
                />
            </div>
        </>
    );
};

export default InputSize;
