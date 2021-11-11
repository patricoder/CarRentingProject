import React, {useContext} from 'react';
import "../SCSS/Header.scss"
import { NavLink} from "react-router-dom";
import {LoginContext} from "./Context/Context";

const active={
    fontWeight: "900",
}
const Header = () => {
const {loggedIn, setLoggedIn} = useContext(LoginContext);
    return <div className={"header"}>
            <h1>Rent&<span>Drive</span></h1>
        <nav>
            <ul>
                {loggedIn ? null : <>
                    <li><NavLink activeStyle={active} exact to="/">HOME</NavLink></li>
                    <li><NavLink activeStyle={active} to='/login'>Log In</NavLink></li>
                    <li><NavLink activeStyle={active} to='/signup'>Sign Up</NavLink></li>
                    </>
                }

            </ul>
        </nav>
    </div>
};

export default Header;