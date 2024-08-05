import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from '../components/Home/Home'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import EmpSignUp from '../components/EmpSignUp'
import Resume from '../components/Resume/Resume'
import Education from '../components/Resume/Education'
import JobIntern from '../components/Resume/JobIntern'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} >
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/profile/student/resume" element={<Resume />} >
        <Route path="/profile/student/resume/education" element={<Education />} />
        <Route path="/profile/student/resume/job" element={<JobIntern type='Job' />} />
        <Route path="/profile/student/resume/internship" element={<JobIntern type='Internship' />} />
      </Route>
      <Route path="/student/signup" element={<SignUp />} />
      <Route path="/Employe/signup" element={<EmpSignUp />} />
    </Routes>
  )
}

export default MainRoutes