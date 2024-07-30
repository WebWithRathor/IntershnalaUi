import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from '../components/Home/Home'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeLayout />} >
            <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/student/signup" element={<SignUp />} />
    </Routes>
  )
}

export default MainRoutes