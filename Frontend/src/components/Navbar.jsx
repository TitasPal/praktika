import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Navbar() {
    return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
   <Link to="/"><h2 className="text-xl">paskelbiu.lt</h2></Link>
  </div>
  <div className="justify-center flex flex-1">
    <input type="text" placeholder="Search" className="input input-bordered w-full max-w-md text-center" />
    <button className="btn">Login</button>
    <button className="btn">Register</button>
    <button className="btn">List</button>
  </div>
</div>
    )
  }

