import React, {useContext, useState} from 'react';
import {collection, addDoc} from "firebase/firestore";
import {db} from "../../Firebase/firebase";
import {OrderContext, UserContext} from "../Context/Context";
import "../../SCSS/Order.scss"

const Orders = () => {
    const {user, order, setOrder} = useContext(UserContext);
    const changeState = (e) => {
        setOrder(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }
    const changeCar = (e) => {
        setOrder(prev => {
            return {
                ...prev,
                car: {
                    ...prev.car,
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    const addDataToFirestore = async () => {
        // let data = await addDoc(collection(db, "orders"),{});
        let orderInfo = {
            email: user.email,
            name: order.name,
            secondName: order.secondName,
            Age: order.Age,
            price: order.priceForDay,
            howLong: order.howLong,
            city: order.city,
            car: {
                brand: order.car.brand,
                model: order.car.model
            },
            startingDate: order.startingDate,
        }
        console.log(orderInfo)
    }
    const sendOrder = (e) => {
        e.preventDefault();
        addDataToFirestore();
    }
    return (<OrderContext.Provider value={{order, setOrder}}>
            <div className={"orderform"}>
                <form onSubmit={sendOrder}>
                    <input type={"text"} name={"email"} value={order.email} onChange={changeState}/>

                    <input type={"text"} name={"brand"} value={order.car.brand} placeholder={"Brand"}
                           onChange={changeCar}/>
                    <input type={"text"} name={"model"} value={order.car.model} placeholder={"Model"}
                           onChange={changeCar}/>

                    <input type={"text"} name={"name"} value={order.name} placeholder={"Name"} onChange={changeState}/>
                    <input type={"text"} name={"secondName"} value={order.secondName} placeholder={"Second name"}
                           onChange={changeState}/>
                    <input type={"number"} name={"Age"} value={order.Age} placeholder={"Age"} min={18}
                           onChange={changeState}/>
                    <input type={"string"} value={order.price + " zł/day"} placeholder={"Price for a day"}
                           onChange={changeState}/>
                    {order.howLong >= 30 && <p>Wynajem powyżej 30 dni? 30% rabatu</p>}
                    <input type={"text"} name={"city"} value={order.city} placeholder={"City"} onChange={changeState}/>

                    FROM<input type={"date"} value={order.startingDate} name={"startingDate"} onChange={changeState}/>
                    HOW LONG <input type={"number"} value={order.howLong} name={"howLong"} onChange={changeState}/>
                    <button type={"submit"}>Confirm</button>

                </form>
            </div>
        </OrderContext.Provider>
    );
};

export default Orders;