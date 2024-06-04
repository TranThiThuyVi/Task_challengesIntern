import React from 'react';
import {TextField} from '@mui/material';
import '../../assets/css/input.css';

const InputFullwidth = () => {
    return (
        <>
            <h3>Input Fullwidth</h3>
            {/* <input /> */}
            <p>use input</p>
            <div className='ipt'>
                <input type="text" class="fullwidth-input" defaultValue="Placeholder" /> 
            </div>

            {/* <TextField /> */}
            <p>use TextField</p>
            <div className='ipt'>
                <TextField fullWidth label="fullWidth" id="fullWidth" />
            </div>
            <div className='ipt'>
                <TextField fullWidth label="fullWidth" id="fullWidth" variant="filled"/>
            </div>
        </>
    );
};

export default InputFullwidth;
