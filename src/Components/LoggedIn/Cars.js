import React, {useEffect, useState} from 'react';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../Firebase/firebase";
import Car from "./Car";
import '../../SCSS/Cars_container.scss'

const Cars = () => {
    const [cars, setCars] = useState([]);
    const getData = async () => {
        let arr = [];
        const data = await getDocs(collection(db, "cars"));
        data.forEach(car=>{
            setCars(prev=>[...prev, car.data()])
        })
        console.log("Dodawanie do stanu")

    }

    useEffect(() => {
        getData();
    }, [])

    return <div className={"cars__container"}>
        {cars.map(car=>{
            return <Car key={car.id} vehicle={car}/>
        })}
    </div>
};

export default Cars;