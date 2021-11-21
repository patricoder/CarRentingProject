import React, {useContext} from 'react';
// import {collection, getDocs} from "firebase/firestore";
// import {db} from "../../Firebase/firebase";
import Car from "./Car";
import '../../SCSS/Cars_container.scss'
import {UserContext} from "../Context/Context";

const Cars = () => {
    const {cars} = useContext(UserContext);

    return <div className={"cars__container"}>
        {cars.map(car=>{
            return <Car key={car.id} vehicle={car}/>
        })}
        {console.log(cars)}
    </div>
};

export default Cars;