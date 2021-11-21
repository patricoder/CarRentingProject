import React, {useContext, useEffect, useState} from 'react';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../Firebase/firebase";
import {UserContext} from "../Context/Context";
import Order from "./Order";

const History = () => {
    const [history, setHistory] = useState([])
    const {user} = useContext(UserContext);
    const getHistory = async () => {
        const data = await getDocs(collection(db, "orders"));
        data.forEach(car => {
            setHistory(prev => [...prev, car.data()])
        })
        console.log("Dodawanie do stanu")
    }
    useEffect(() => {
        getHistory();
    }, [])

    return <>
        <ul>
            {history.map(order => {
                if (order.email === user.email) {
                    return <Order key={order.carId} order={order}/>
                }
            })}
        </ul>

    </>

};

export default History;