import React from 'react';
import {TextField} from '@mui/material';
import '../../assets/css/input.css';

const InputMultiline = () => {
    return (
        <>
            <h3>Input Multiline</h3>

            {/* <TextField /> */}
            <p>use TextField</p>
            <div className='ipt'>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                />
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                />
            </div>
        </>
    );
};

export default InputMultiline;
