import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login(){
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = ()=>{
        const userEmail = email.trim();
        const UserPassword=password.trim();
        if(userEmail === "admin@gmail.com" && UserPassword==="admin1234"){
            login({ role: "admin", email:userEmail});
            navigate("/admin/dashboard");
            return;
        }
        if(
            userEmail === "customer@gamil.com" && UserPassword === "customer1234"
        ){
            login({role: "customer", email:userEmail});
            navigate("/customers/dashboard");
            return;
        }
            alert("Invalid credentials")
        
    };

    return (
        <div className="center">
            <h2>Login</h2>
            <input type="email" value={email} placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
            <input 
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}