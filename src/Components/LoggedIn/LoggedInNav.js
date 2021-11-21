import React from 'react';
import {NavLink} from "react-router-dom";
import '../../SCSS/LoggedInNav.scss'
const LoggedInNav = () => {
    const style={
        backgroundColor :"#2892d7",
        padding: ".25rem 1rem",
        borderRadius: "4px",
        color: "white"
    }
    return <div className={"navlist"}>
        <ul>
            <NavLink activeStyle={style} exact to='/cars'>Cars</NavLink>
            <NavLink activeStyle={style} to='/history'>History</NavLink>
            <NavLink activeStyle={style} to='/orders'>Order</NavLink>
        </ul>
    </div>
};

export default LoggedInNav;