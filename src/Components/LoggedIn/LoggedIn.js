import React, {useEffect, useState} from 'react';
import "../../SCSS/LoggedIn.scss"
import LoggedInHeader from "./LoggedInHeader";
import LoggedInNav from "./LoggedInNav";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Cars from './Cars'
import History from "./History";
import Orders from "./Orders";
import {UserContext} from "../Context/Context";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../Firebase/firebase";
const LoggedIn = ({signOut, user}) => {
    const [changes, setChanges] = useState(false);
    const [order, setOrder] = useState({
        id: '',
        email: user.email,
        name: '',
        secondName: '',
        price: false,
        howLong: 0,
        city: '',
        car: 'main',
        startingDate: '',
    })
    const [cars, setCars] = useState([]);
    cars.filter(car=>{
        if(`${car.brand} ${car.model}` === order.car){
            order.price = car.priceForDay;
        }
        return null;
    })
    const getData = async () => {
        const data = await getDocs(collection(db, "cars"));
        data.forEach(car=>{
            setCars(prev=>[...prev, car.data()])
        })
        console.log("Dodawanie do stanu")
    }

    useEffect(()=>{
        getData();
    },[changes])

    return<UserContext.Provider value={{user,order,setOrder, cars, setCars, getData, setChanges, changes}}>
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