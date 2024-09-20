import React, { useEffect, useState } from 'react'
import Posters from './Posters'
import TopCompanies from './TopCompanies'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadStudent } from '../../store/actions/studentAction'
import { loadEmploye } from '../../store/actions/employeAction'

const HomeLayout = () => {
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
    <div className='h-full pt-32 w-full'>
      <div className="">
        <h1 className='text-[3vw] text-zinc-700 font-bold text-center mt-10'>{student ? 'Make your dream career a reality' : 'Make your dream a reality'}</h1>
        <img className='h-14 mx-auto w-[35vw] pl-40 object-[-27px_1px]' src="https://internshala.com/static/images/home/sprites/underline_fire.png" alt="" />
      </div>
      {isLoggedIn && student != null || employe != null ?
        <h1 className='text-center text-zinc-700 font-bold text-3xl'>Trending for <span className='capitalize'>{student && student.firstname || employe.firstname} {student && student.lastname || employe.lastname}</span>🔥</h1> :
        <h1 className='text-center text-zinc-700 font-bold text-3xl'>Trending on Intershala 🔥</h1>
      }

      <Posters />
      <TopCompanies />
      <Outlet />
    </div>
  )
}

export default HomeLayout