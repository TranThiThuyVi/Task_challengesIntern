import React from 'react';
import {Button } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material';
import "../assets/css/button.css";

const Buttons = () => {
    return(
        //code at here
        <>
            <h1> Buttons </h1>
            <div className="button">
                <Button variant="contained" 
                    style={{color: "black",
                        backgroundColor: "#E0E0E0"}}
                >Default</Button>
                <Button
                    variant="contained"
                    style={{color: "black",
                        backgroundColor: "#AEAEAE"}}
                >
                    Default
                </Button>
            </div>
            <div className="button">
                <Button variant="outlined">Default</Button>
                <Button variant="outlined" style={{ backgroundColor: '#EAEFFF' }}>Default</Button>
            </div>
            <div className="button">
                <Button variant="text">Default</Button>
                <Button variant="text" style={{ backgroundColor: '#EAEFFF' }}>Default</Button>
            </div>
            <div className="button">
                <Button variant="contained" disableElevation>
                    Default
                </Button>
            </div>
            <div className="button">
                <Button variant="contained" disabled>Default</Button>
                <Button variant="text" disabled>Default</Button>
            </div>
            <div className="button">
                <Button variant="contained" startIcon={<ShoppingCart />}>
                    Default
                </Button>
                <Button variant="contained" endIcon={<ShoppingCart />}>
                    Default
                </Button>
            </div>
            <div className="button">
                <Button variant="contained" size="small">
                    Default
                </Button>
                <Button variant="contained" size="medium">
                    Default
                </Button>
                <Button variant="contained" size="large">
                    Default
                </Button>
            </div>
            <div className="button">
                <Button variant="contained" 
                    style={{color: "black",
                        backgroundColor: "#E0E0E0"}}
                > Default </Button>
                <Button variant="contained" color="primary"> Default  </Button>
                <Button variant="contained" 
                    style={{
                        backgroundColor: "#455A64"}}>
                    Secondary
                </Button>
                <Button variant="contained" color="error">
                    Danger
                </Button>
            </div>
            <div className="button">
                <Button variant="contained" 
                    style={{color: "black",
                        backgroundColor: "#AEAEAE"}}
                > Default </Button>
                <Button variant="contained" color="primary" 
                    style={{
                        backgroundColor: "#0039CB"}}
                > Default  </Button>
                <Button variant="contained" 
                    style={{
                        backgroundColor: "#1C313A"}}>
                    Secondary
                </Button>
                <Button variant="contained" color="error" 
                    style={{
                        backgroundColor: "#9A0007"}}
                >
                    Danger
                </Button>
            </div>
        </>
    );
};

export default Buttons;