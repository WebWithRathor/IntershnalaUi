import React, { useEffect, useState } from 'react'
import Posters from './Posters'
import Show from './Show'
import TopCompanies from './TopCompanies'
import { Outlet, useNavigate } from 'react-router-dom'
import Nav from '../Partials/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { loadStudent } from '../../store/actions/studentAction'

const HomeLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isLoggedIn, setisLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) || false);
  const student = useSelector(store => store.studentSlice.student);
  useEffect(() => {
    if (student === null) dispatch(loadStudent(navigate));
  }, [student]);





  return (
    <div className='h-full pt-32 w-full'>
      <Nav />

      <div className="">
        <h1 className='text-[3vw] text-zinc-700 font-bold text-center mt-10'>Make your dream career a reality</h1>
        <img className='h-14 mx-auto w-[35vw] pl-40 object-[-27px_1px]' src="https://internshala.com/static/images/home/sprites/underline_fire.png" alt="" />
      </div>
      {isLoggedIn && student != null ?
        <h1 className='text-center text-zinc-700 font-bold text-3xl'>Trending for <span className='capitalize'>{student.firstname} {student.lastname}</span>🔥</h1> :
        <h1 className='text-center text-zinc-700 font-bold text-3xl'>Trending on Intershala 🔥</h1>
      }
   
      <Posters />
      <Show type='Intership' />
      <Show type='Job' />
      <TopCompanies />
      <Outlet />
    </div>
  )
}

export default HomeLayout