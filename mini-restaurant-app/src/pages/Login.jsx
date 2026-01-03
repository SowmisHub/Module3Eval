import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login(){
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin = ()=>{
        if(email === "admin@gmail.com" && password==="admin1234"){
            login({ role: "admin"});
            navigate("/admin/dashboard");
        }
        else if(
            email === "customer@gamil.com" && password === "customer1234"
        ){
            login({role: "customer"});
            navigate("/customers/dashboard");
        }else{
            alert("Invalid credentials")
        }
    };

    return (
        <div className="center">
            <h2>Login</h2>
            <input placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
            <input 
            type="password"
            placeholder="password"
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}