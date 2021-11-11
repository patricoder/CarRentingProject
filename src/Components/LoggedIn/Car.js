import React from 'react';
import "../../SCSS/Cars_container.scss"

const Car = ({vehicle}) => {

    return <div className={"carcontainer"} style={{
        boxShadow: `0px 0px 19px 0px ${vehicle.rented ? "green" : "red"}`
    }}>
        {!vehicle.rented && <p className={"rented_alert"}>Alredy rented</p>}
        <div style={
            {
                height: 300,
                width: 400,
                backgroundImage: `url(${vehicle.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
            }
        }></div>
        <h3>{vehicle.brand} {vehicle.model}</h3>
        <p>Price: <span>{vehicle.priceForDay}</span> zł / 1 day</p>
        {console.log(vehicle.image)}
            <div className={"car__info"}>
                <div><i className="fas fa-gas-pump"></i> {vehicle.engineType}</div>
                <div><i className="fas fa-tachometer-alt"></i> {vehicle.hp} KM</div>
            </div>
    </div>
};

export default Car;