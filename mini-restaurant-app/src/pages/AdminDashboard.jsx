import { useState, useEffect } from "react";

const IMAGE_URL = "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"

export default function AdminDashboard(){
    const [restaurants, setRestaurants] = useState([]);
    const [form, setForm] = useState({
        name:"",
        address: "",
        type: "Rajasthani",
        parking: "Yes",
    });

    useEffect(()=> {
        const data =JSON.parse(localStorage.getItem("restData")) || [];
        setRestaurants(data);
    }, []);

    const handleAdd =()=>{
        if(!form.name || !form.address){
            alert("Please fill all fields");
            return;
        }
        const newRestaurant ={
            restaurantID: Date.now(),
            name: form.name,
            address: form.address,
            type: form.type,
            parking: form.parking === "Yes",
            image: IMAGE_URL,
        };

        const updatedList = [...restaurants, newRestaurant]

        setRestaurants(updatedList);
        localStorage.setItem("restData", JSON.stringify(updatedList));
        alert("Restaurant added succesfully");

        setForm({
            name:"",
            address:"",
            type:"Rajasthani",
            parking: "Yes",
        });
    };

    return (
        <div className="admin-layout">
            {/* LEFT SIDEBAR */}
            <div className="sidebar">
                <h3>Add Restaurant</h3>

                <input placeholder="Restaurant Name"
                value={form.name}
                onChange={(e)=> setForm({...form, name:e.target.value})} />
                <input placeholder="Restaurant address"
                value={form.address}
                onChange={(e)=> setForm({...form, address:e.target.value})} />

                <select value={form.type}
                onChange={(e)=> setForm({...form,type:e.target.value})}>
                    <option>Rajasthani</option>
                    <option>Gujarati</option>
                    <option>Mughlai</option>
                    <option>Jain</option>
                    <option>Thai</option>
                    <option>North Indian</option>
                    <option>South Indian</option>
                </select>

                <select value={form.parking}
                onChange={(e)=>setForm({...form,parking:e.target.value})}>
                    <option>Yes</option>
                    <option>No</option>
                </select>

                <button onClick={handleAdd}>Add Restaurant</button>
            </div>

            <div className="content">
                <h2>Admin Dashboard</h2>
                <div className="card-grid">
                    {restaurants.map((r)=>(
                        <div className="card" key={r.restaurantID}>
                            <img src={r.image} alt="restaurant"/>
                            <h4>{r.name}</h4>
                            <p>{r.address}</p>
                            <p>{r.type}</p>
                            <p>Parking: {r.parking ? "Yes" :"No"}</p>

                            <div className="btn-group">
                                <button>Update</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}