import React, { useEffect, useState } from 'react'
import MainRoutes from './Routes/MainRoutes'
import Nav from './components/Partials/Nav'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadStudent } from './store/actions/studentAction';
import { loadEmploye } from './store/actions/employeAction';

const App = () => {
 
  const [isLoggedIn, setisLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) || false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const type = localStorage.getItem('type');
  const student = useSelector(store => store.studentSlice.student);
  const employe = useSelector(store => store.employeSlice.employe);


  useEffect(() => {
    if (type === 'student') {
      if (student === null) dispatch(loadStudent(navigate));
    } else if (type === 'employe') {

      if (employe === null) dispatch(loadEmploye(navigate));
      if (employe && !employe.completeDetails) navigate('/employe/completeDetails')

    }
  }, [student, employe]);


  return (
    <>
 <Nav isLoggedIn={isLoggedIn} student={student} employe={employe} />
      <MainRoutes />
    </>
  )
}

export default App