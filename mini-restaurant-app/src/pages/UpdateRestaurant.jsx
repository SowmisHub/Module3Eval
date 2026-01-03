import { useParams, useNavigate } from "react-router-dom";
import { getRestaurants, saveRestaurants } from "../utils/storage.js";
import { useState } from "react";

export default function UpdateRestaurant(){
    const { id }=useParams();
    const navigate = useNavigate();
    const list = getRestaurants();
    const current= list.find((r)=>r.restaurantID == id);
    const [form, setForm] = useState(current);

    const update =()=>{
        if(!confirm("Update restaurant?")) return;

        const updated = list.map((r)=>
        r.restaurantID == id ? form: r
    );
    saveRestaurants(updated);
    alert("Updated successfully");
    navigate("/admin/dashboard");
    };

    return (
        <div className="form">
            <input value={form.name} onChange={(e)=> setForm({...form, name: e.target.value})} />
            <input value={form.address} onChange={(e)=> setForm({...form, address: e.target.value})} />
            <button onClick={update}>Update</button>
        </div>
    );
}