import { BrowserRouter, useNavigate, Routes, Route, Link } from 'react-router-dom'

export default function Navbar({query, setQuery}) {

  const navigate = useNavigate(); 
  const user = JSON.parse(localStorage.getItem("user")) 

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
}
return (
<div className="navbar bg-white shadow-sm">
  <div>
   <Link to="/"><h2 className="text-xl text-black">paskelbiu.lt</h2></Link>
  </div>
    <div className="flex flex-1 justify-center  ml-10">
    <input type="text" placeholder="Search" className="input input-bordered bg-gray-100 w-full  mr-10 max-w text-black text-center rounded-xl" value={query} onChange={(e) => setQuery(e.target.value)} />
</div>
<div className="flex items-center gap-2">
    {user ? (
        <button onClick={logout} className=" rounded-sm bg-white border-cyan-600 border-2 w-20 text-center h-10  text-cyan-600">Logout</button>
    ) : (
        <>
            <Link to="/login" className=" rounded-sm bg-white border-cyan-600 border-2 w-40 text-center h-10 pt-1 text-cyan-600">sign-Up | Login</Link>
        </>
    )}
    <Link to="/post" className=" rounded-sm bg-white border-cyan-600 border-2 w-25 text-center h-10 pt-1 text-cyan-600">sell now!</Link>
</div>
  </div>

)
  }
