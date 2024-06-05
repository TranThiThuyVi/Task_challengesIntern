import React from 'react';
import InputBasic from './input-component/InputBasic.component';
import InputError from './input-component/InputError.component';
import InputDisable from './input-component/InputDisable.component';
import InputHelpText from './input-component/InputHelpText.component';
import InputIcon from './input-component/InputIcon.component';
import InputSize from './input-component/InputSize.component';
import InputFullwidth from './input-component/InputFullwidth.component';
import InputMultiline from './input-component/InputMultiline.component';
import InputPassword from './input-component/InputPassword.component';
import '../assets/css/input.css';

const Inputs = () => {
    return (
        <>
            <h1>Inputs</h1>
            <InputBasic />
            <InputError />
            <InputDisable />
            <InputHelpText />
            <InputIcon />
            <InputSize />
            <InputFullwidth />
            <InputMultiline />
            <InputPassword />
        </>
    );
};

export default Inputs;
