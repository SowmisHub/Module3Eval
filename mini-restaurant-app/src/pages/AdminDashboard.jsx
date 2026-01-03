import { useState, useEffect } from "react";
import { getRestaurants, saveRestaurants } from "../utils/storage.js";
import RestaurantCard from "../components/RestaurantCard.jsx";

export default function AdminDashboard(){
    const [list, setList] = useState([]);
    const [form, setForm] = useState({
        name:"",
        address: "",
        type: "Rajasthani",
        parking: "true",
        image:"https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    });

    useEffect(()=>{
        setList(getRestaurants());
    }, []);

    const addRestaurant =()=>{
        if(!form.name || !form.address){
            alert("Fill all fields");
            return;
        }
        const newData ={
            restaurantID: Date.now(),
            ...form,
            parking: form.parking === "true",
        };

        const updated =[...list, newData];
        saveRestaurants(updated);
        setForm(updated);
        alert("Restaurant added")
    };
    return (
        <div>
            <h2>ADmin Dashboard</h2>
            <div className="form">
                <input placeholder="Name" onChange={(e)=> setForm({...form, name: e.target.value})} />
                <input placeholder="Address" onChange={(e)=> setForm({...form, address: e.target.value})} />

                <select onChange={(e)=> setForm({...form, type:e.target.value})}>
                    <option>Rajasthani</option>
                    <option>Gujarat</option>
                    <option>Mughlai</option>
                    <option>Jain</option>
                    <option>Thai</option>
                    <option>North Indian</option>
                    <option>South Indian</option>
                </select>

                <select onChange={(e)=> setForm({...form,parking: e.target.value})}>
                    <option value="true">Parking Available</option>
                    <option value="false">No parking</option>
                </select>

                <button onClick={addRestaurant}>Add</button>
                
            </div>
            <div className="grid">
                {list.map((r)=>(
                    <RestaurantCard key={r.restaurantID} data={r} admin />
                ))}
            </div>
        </div>
    );
}