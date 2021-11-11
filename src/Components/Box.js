import React from 'react';
import "../SCSS/WelcomePage.scss"
const Box = ({title,text,icon}) => {
    return (
        <div className={"welcomePage__box"}>
            <i className={icon}> </i>
            <h1>{title}</h1>
            <span>{text}</span>
        </div>
    );
};

export default Box;