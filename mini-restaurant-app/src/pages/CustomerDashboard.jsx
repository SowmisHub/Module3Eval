import { useEffect, useState } from "react";
import { getRestaurants } from "../utils/storage.js";
import RestaurantCard from "../components/RestaurantCard.jsx";

export default function CustomerDashboard(){
    const [list, setList] = useState([]);
    useEffect(()=>{
        setList(getRestaurants());
    },[]);

    return (
        <div>
            <h2>Customer Dashboard</h2>
            <div className="grid">
                {list.map((r)=>(
                    <RestaurantCard key={r.RestaurantID} data={r} />
                ))}
            </div>
        </div>
    );
}