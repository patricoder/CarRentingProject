import React from 'react';
import {NavLink} from "react-router-dom";
import '../../SCSS/LoggedInNav.scss'
const LoggedInNav = () => {
    const style={
        borderBottom: "4px solid black"
    }
    return <div className={"navlist"}>
        <ul>
            <NavLink activeStyle={style} exact to='/cars'>Cars</NavLink>
            <NavLink activeStyle={style} to='/history'>History</NavLink>
            <NavLink activeStyle={style} to='/orders'>Orders</NavLink>
        </ul>
    </div>
};

export default LoggedInNav;