import React, {useState} from 'react';
import "../SCSS/App.scss"
import Header from "./Header";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import NotFound from "./NotFound";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import {LoginContext} from "./Context/Context";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/login" component={LogIn}></Route>
                    <Route path="/signup" component={SignUp}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </Router>
        </div>
    </LoginContext.Provider>

};

export default App;