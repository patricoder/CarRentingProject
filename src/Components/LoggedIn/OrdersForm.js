import React from 'react';
import "../../SCSS/Order.scss"
const OrdersForm = ({cars,order, sendOrder,changeState}) => {

    return <form className={"orderform__inputs"} onSubmit={sendOrder}>
        <input type={"text"} name={"email"} value={order.email} onChange={changeState}/>
        <select name={"car"} onChange={changeState} value={order.car}>
            <option value={'main'}>chose a car...</option>
            {cars.map(car => {
                if(car.rented === true){
                    return <option value={`${car.brand} ${car.model}`}>{car.brand} {car.model}</option>
                }
            })}

        </select>

        {order.price && <><p>PLN/DAY</p>
            <input name={"price"} type={"string"} value={+order.price} placeholder={"Price for a day"}
                   onChange={changeState}/>
            {order.howLong >= 30 && <p className={"discount"}>for rentals over 30 days, 30% discount</p>}</>}

        <input type={"text"} name={"name"} value={order.name} placeholder={"Name"} onChange={changeState}/>
        <input type={"text"} name={"secondName"} value={order.secondName} placeholder={"Second name"}
               onChange={changeState}/>

        <input type={"text"} name={"city"} value={order.city} placeholder={"City"} onChange={changeState}/>

        FROM<input type={"date"} value={order.startingDate} name={"startingDate"} onChange={changeState}/>
        HOW LONG <input type={"number"} value={order.howLong} name={"howLong"} onChange={changeState}/>
        <button type={"submit"}>Confirm</button>

    </form>
};

export default OrdersForm;