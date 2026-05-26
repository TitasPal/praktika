import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CreatePost from './pages/CreatePost.jsx'
import LoginPage from './pages/LoginPage.jsx'
import AdminPage from './pages/AdminPage.jsx'

function App() {
  return (
    <>
        <Navbar />
    <div>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/post" element={<CreatePost/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/admin" element={<AdminPage/>} />
        </Routes>
    </div>
    </>
  )
}

export default App
