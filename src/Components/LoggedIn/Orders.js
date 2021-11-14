import React, {useContext} from 'react';
import {OrderContext, UserContext} from "../Context/Context";
import "../../SCSS/Order.scss"
import OrdersForm from "./OrdersForm";

const Orders = () => {
    const {user, order, setOrder, cars} = useContext(UserContext);
    const changeState = (e) => {
        setOrder(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }
    const addDataToFirestore = async () => {
        // let data = await addDoc(collection(db, "orders"),{});
        let orderInfo = {
            email: user.email,
            name: order.name,
            secondName: order.secondName,
            price: order.howLong >= 30 ? (order.price * order.howLong) - ((order.price * order.howLong) * 0.3) : order.price * order.howLong,
            howLong: +order.howLong,
            city: order.city,
            car: order.car,
            startingDate: order.startingDate
        }
        console.log(orderInfo)
    }
    const sendOrder = (e) => {
        e.preventDefault();
        if (order.name === '' || order.secondName === '' || order.price === false || order.howLong === "" || order.city === '' || order.startingDate === '' || order.car === "main") {
            alert('Uzupełnij wszystkie pola');
        } else {
            addDataToFirestore();
        }
    }

return <OrderContext.Provider value={{order, setOrder}}>
    <div className={"orderform"}>
        <OrdersForm order={order} cars={cars} changeState={changeState} sendOrder={sendOrder}/>
    </div>
</OrderContext.Provider>
}
export default Orders;

