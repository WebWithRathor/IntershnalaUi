import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from '../components/Home/Home'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import EmpSignUp from '../components/EmpSignUp'
import Resume from '../components/Resume/Resume'
import Education from '../components/Resume/Education'
import JobIntern from '../components/Resume/JobIntern'
import Responsibility from '../components/Resume/Responsibility'
import Training from '../components/Resume/Training'
import Projects from '../components/Resume/Projects'
import Skill from '../components/Resume/Skill'
import WorkSamples from '../components/Resume/WorkSamples'
import Accomplishment from '../components/Resume/Accomplishment'
import { useSelector } from 'react-redux'

const MainRoutes = () => {
  const student = useSelector(store=>store.studentSlice.student);
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} >
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/profile/student/resume" element={<Resume />} >
        <Route path="/profile/student/resume/education" element={<Education />} />
        <Route path="/profile/student/resume/job" element={<JobIntern type='Job' />} />
        <Route path="/profile/student/resume/internship" element={<JobIntern type='Internship' />} />
        <Route path="/profile/student/resume/responsibility" element={<Responsibility />} />
        <Route path="/profile/student/resume/training" element={<Training />} />
        <Route path="/profile/student/resume/projects" element={<Projects />} />
        <Route path="/profile/student/resume/skill" element={<Skill />} />
        <Route path="/profile/student/resume/worksample" element={<WorkSamples worksample={student && student.resume.workSamples} />} />
        <Route path="/profile/student/resume/accomplishment" element={<Accomplishment />} />
      </Route>
      <Route path="/student/signup" element={<SignUp />} />
      <Route path="/Employe/signup" element={<EmpSignUp />} />
    </Routes>
  )
}

export default MainRoutes