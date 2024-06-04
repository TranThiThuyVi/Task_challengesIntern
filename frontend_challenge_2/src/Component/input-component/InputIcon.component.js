import React from 'react';
import {TextField, InputAdornment, IconButton} from '@mui/material';
import {Phone, Lock} from '@mui/icons-material';
import '../../assets/css/input.css';

const InputIcon = () => {
    return (
        <>
            <h3>Input Icon</h3>
            {/* <input /> */}
            <p>use input</p>
            <div className='ipt'>
                <label>
                    Label
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton  sx={{ position: 'absolute', left: '0', p: '5px' }} >
                            <Phone/>
                        </IconButton>
                        <input type="text" defaultValue="Placeholder" style={{ paddingRight: '40px' }} />
                        
                    </div>
                </label>
                <label>
                    Label
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="text" defaultValue="Placeholder" style={{ paddingRight: '50px' }} />
                        <IconButton  sx={{ position: 'absolute', right: '0', p: '10px' }} >
                            <Lock />
                        </IconButton>
                    </div>
                </label>
            </div>

            {/* <TextField /> */}
            <p>use TextField</p>
            <div className='ipt'>
                <TextField
                    id="input-with-icon-textfield"
                    label="Label"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <Phone />
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                    defaultValue=" Placeholder"
                />
                <TextField
                    id="input-with-icon-textfield"
                    label="Label"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <Phone />
                        </InputAdornment>
                    ),
                    }}
                    variant="outlined"
                    defaultValue=" Placeholder"
                />
                <TextField
                    id="input-with-icon-textfield"
                    label="Label"
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <Lock />
                        </InputAdornment>
                    ),
                    }}
                    variant="outlined"
                    defaultValue=" Placeholder"
                />
            </div>
        </>
    );
};

export default InputIcon;
