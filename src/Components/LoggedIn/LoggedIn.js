import React, {useState} from 'react';
import "../../SCSS/LoggedIn.scss"
import LoggedInHeader from "./LoggedInHeader";
import LoggedInNav from "./LoggedInNav";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Cars from './Cars'
import History from "./History";
import Orders from "./Orders";
import {UserContext} from "../Context/Context";
const LoggedIn = ({signOut, user}) => {
    const [order, setOrder] = useState({
        email: user.email,
        name: '',
        secondName: '',
        Age: '18',
        price: '',
        howLong: '',
        city: '',
        car: {
            brand: '',
            model: ''
        },
        startingDate: '',
    })
    return<UserContext.Provider value={{user,order,setOrder}}>
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
    </UserContext.Provider>
};

export default LoggedIn;