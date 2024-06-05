import React from 'react';
import {TextField} from '@mui/material';
import '../../assets/css/input.css';

const InputBasic = () => {
    return (
        <>
            <h3>Basic</h3>
            {/* <input /> */}
            <p>use input</p>
            <div className='ipt'>
                <label>
                    Label
                    <input type="text" defaultValue="Placeholder" />
                </label>
                <label>
                    Label &hover
                    <input type="text" defaultValue="Placeholder" style={{borderColor: "black"}}/>
                </label>
                <label style={{color: "blue"}}>
                    Label &focus
                    <input type="text" defaultValue="Placeholder" style={{borderColor: "blue"}}/>
                </label>
            </div>

            {/* <TextField /> */}
            <p>use TextField</p>
            <div className='ipt'>
                <TextField
                    id="outlined-read-only-input"
                    label="Label"
                    defaultValue="Placeholder"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Label"
                    defaultValue="Placeholder"
                    InputProps={{
                        readOnly: true,
                    }}
                    color="grey" 
                    focused
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Label"
                    defaultValue="Placeholder"
                    InputProps={{
                        readOnly: true,
                    }}
                    color="primary"
                    focused
                />
            </div>
            <div className='ipt'>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </>
    );
};

export default InputBasic;
