import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {

            const [username, setUsername] = useState("");
            const [password, setPassword] = useState("");
            const [email, setEmail] = useState("");
            const [isLoading, setIsLoading] = useState(false);
            const navigate = useNavigate();

            const saveUser = async (e) => {
                e.preventDefault();
                if (username === "" || password === "" || email === ""){
                    alert("incorrect credentials")
                    return;
            }
            try{
                setIsLoading(true);
                const response = await axios.post("http://localhost:3000/api/users", { username: username, password: password, email: email});
                alert(`User ${response.data.username} created!`);
                setIsLoading(false);
                navigate("/");
            }catch(error){
                console.log(error);
                setIsLoading(false);
            }
        }

    return (
<div className="flex justify-center items-center h-100">
<form onSubmit={saveUser} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Create an account</legend>

  <label className="label">Username</label>
  <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />

  <label className="label">Email</label>
  <input type="email" className="input"value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
  {!isLoading && (<button className="btn btn-neutral mt-4">Create Account</button>)}
</form>
</div>
    )
}
export default RegisterPage