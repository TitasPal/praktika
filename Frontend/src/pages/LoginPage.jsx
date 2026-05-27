import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const LoginPage = () => {

            const [username, setUsername] = useState("");
            const [password, setPassword] = useState("");
            const [isLoading, setIsLoading] = useState(false);
            const navigate = useNavigate(); 


    const loginUser = async(e) =>{
        e.preventDefault();
        if(username === "" || password === ""){
            alert('incorrect credencials');
        return;
        }
    
    try{
        setIsLoading(true);
        const response = await axios.post("http://localhost:3000/api/users/login", {username: username, password: password});
        console.log('login succesfull');
        localStorage.setItem("user", JSON.stringify(response.data));
        setIsLoading(false);
        navigate("/")
    }catch(error){
        console.log(error);
        setIsLoading(false);
    }
    };


    return (
        <div className='bg-white'>
<div className="flex justify-center items-center h-100 ">
<form onSubmit={loginUser} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <h1 className="text-lg justify-center">Login</h1>

  <label className="label">Username</label>
  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}className="input" placeholder="Username" />

  <label className="label">Password</label>
  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" />

 {!isLoading && (<button className="btn btn-neutral mt-4">Login</button>)}
</form>
</div>
</div>
    )
}
export default LoginPage;