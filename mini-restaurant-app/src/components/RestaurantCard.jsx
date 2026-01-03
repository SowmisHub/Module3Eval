import { useNavigate } from "react-router-dom";
import { getRestaurants, saveRestaurants } from "../utils/storage.js";

export default function RestaurantCard ({data, onDelete, isadmin }){
    const navigate = useNavigate();

    return (
        <div className="card">
            <img src={data.image} alt="testaurant"/>
            <h4>{data.name}</h4>
            <p>{data.address}</p>
            <p>{data.type}</p>
            <p>{data.parking ? "Parking Available" : "No Parking" }</p>

            {isadmin && (
                <div className="btn-group">
                <button onClick={()=> navigate(`/admin/restaurants/update/${data.restaurantID}`)}>
                    Update 
                    </button>
                    <button onClick={()=> onDelete(data.restaurantID)}>Delete</button>
                </div>
            )}
        </div>
    );
}