import React, {useContext, useState} from 'react';
import "../../SCSS/Cars_container.scss"
import {useHistory} from "react-router-dom";
import {UserContext} from "../Context/Context";

const Car = ({vehicle}) => {
    const [hide, setHide] = useState(true)
    let history = useHistory();
    const {order,setOrder} = useContext(UserContext);
    const carOrder = () => {
        setOrder(prev=>{
            return{
                ...prev,
                price: vehicle.priceForDay,
                car: `${vehicle.brand} ${vehicle.model}`
            }
        })
        history.push('/orders');
        console.log(order)
    }
    const hideElement = () =>{
        setHide(!hide);
    }
    return <div onClick={hideElement} className={"carcontainer"} style={{
        boxShadow: `0px 0px 5px 0px ${!vehicle.rented && "red"}`
    }}>
        <div style={
            {
                height: 270,
                width: 400,
                backgroundImage: `url(${vehicle.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                borderRadius: 10,
            }
        }>
        </div>
        <h3>{vehicle.brand} {vehicle.model}</h3>
        <p>Price: <span>{vehicle.priceForDay}</span> zł / 1 day</p>
        <div className={"car__info"}>
            <div><i className="fas fa-gas-pump"></i> {vehicle.engineType}</div>
            <div><i className="fas fa-tachometer-alt"></i> {vehicle.hp} KM</div>
        </div>
        {vehicle.rented && <button className={"rent__now"} style={{display: hide && "none"}} onClick={carOrder}>Rent now</button> }
    </div>
}
export default Car;