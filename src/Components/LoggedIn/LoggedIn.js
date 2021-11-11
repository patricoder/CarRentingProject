import React from 'react';
import "../../SCSS/LoggedIn.scss"
import LoggedInHeader from "./LoggedInHeader";
import LoggedInNav from "./LoggedInNav";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Cars from './Cars'
import History from "./History";
import Orders from "./Orders";
const LoggedIn = ({signOut, user}) => {

    return<>
        <div className={"content"}>
            <LoggedInHeader user={user} signOut={signOut}/>
            <Router>
                <LoggedInNav/>
                <Switch>
                    <Route path='/cars' component={Cars}/>
                    <Route path='/history' component={History}/>
                    <Route path='/orders' component={Orders}/>
                </Switch>
            </Router>

        </div>
    </>
};

export default LoggedIn;