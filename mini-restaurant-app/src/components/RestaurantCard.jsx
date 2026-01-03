import { useNavigate } from "react-router-dom";
import { getRestaurants, saveRestaurants } from "../utils/storage.js";

export default function RestaurantCard ({data, admin }){
    const navigate = useNavigate();
    const deleteItem =()=>{
        if (!confirm("Are you sure?")) return;
        const updated =  getRestaurants().filter(
            (r)=> r.RestaurantID !== data.restaurantID
        );
        saveRestaurants(updated);
        window.location.reload();
    };

    return (
        <div className="card">
            <img src={data.image} />
            <h4>{data.name}</h4>
            <p>{data.address}</p>
            <p>{data.type}</p>
            <p>{data.parking ? "Parking Available" : "No Parking" }</p>

            {admin && (
                <>
                <button onClick={()=> navigate(`/admin/restaurants/update/${data.restaurantID}`)}>
                    Update 
                    </button>
                    <button onClick={deleteItem}>Delete</button>
                </>
            )}
        </div>
    );
}