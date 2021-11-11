import React, {useState} from 'react';
import {collection, addDoc} from "firebase/firestore";
import {db} from "../../Firebase/firebase";
const Orders = () => {
  const [brand, setBrand] =  useState('')
   const [model, setModel] =  useState('')
    const [engine, setEngine] = useState("diesel")
    const [hp,setHp] = useState('')
    const [image, setImage]=useState('')
    const [rented, setRented] =useState(false);
    const [price, setPrice] = useState('');
    const addDataToFirestore = async()=>{
        let data = await addDoc(collection(db, "cars"),{
            brand,
            engineType: engine,
            hp,
            image,
            model,
            priceForDay: price,
            rented
        });
        console.log("Document writtem with id: ", data.id)
    }
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(brand,model,engine,hp,image,rented,price);
        addDataToFirestore();
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                Marka <input type={"text"} value={brand} onChange={e=>setBrand(e.target.value)}/>
                Model <input type={"text"} value={model} onChange={e=>setModel(e.target.value)}/>
                Silnik <select onChange={e=>setEngine(e.target.value)} value={engine}>
                            <option value={"petrol"}>Petrol</option>
                            <option value={"electric"}>Electric</option>
                            <option value={"diesel"}>Diesel</option>
                            <option value={"hybrid"}>Hybrid</option>
                      </select>
                HP <input type={"number"} min={1} value={hp} onChange={e=>setHp(e.target.value)}/>
                Image link <input type={"text"}  value={image} onChange={e=>setImage(e.target.value)}/>
                Rented <select onChange={e=>setRented(e.target.value)} value={rented}>
                            <option value={true}>TRUE</option>
                            <option value={false}>FALSE</option>
                        </select>
                PRICE FOR DAY <input type={"number"} min={1} value={price} onChange={e=>setPrice(e.target.value)}/>
                <button type={"submit"}>Dodaj</button>
            </form>
        </div>
    );
};

export default Orders;