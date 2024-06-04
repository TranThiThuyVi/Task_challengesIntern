import React from 'react';
import { Typography } from "@mui/material";
import "../assets/css/sidebar.css";

const Sidebar = () => {
    const menuData = [
        {
        text: "Typography",
        children: [],
        },
        {
        text: "Spaces",
        children: [],
        },
        {
        text: "Buttons",
        children: [],
        },
        {
        text: "Inputs",
        children: [],
        },
        {
        text: "Grid",
        children: [],
        },
    ];

    return (
        <div class="container">
            <div className="sidebar">
                <div
                    style={{
                    color: "#888",
                    display: "flex",
                    alignItems: "center",
                    }}
                >
                    <Typography
                    variant="h6"
                    sx={{
                        fontSize: 14,
                        color: "#333",
                        textTransform: "uppercase",
                        fontWeight: "600",
                        lineHeight: "20px",
                    }}
                    >
                    <span style={{ color: "red" }}>Dev</span>challange.io
                    </Typography>
                </div>
                <ul className="menu">
                    {menuData.map((item, index) => (
                    <li key={index}>
                        <a className={item.text === "Buttons" ? "bold" : ""}>{item.text}</a>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;