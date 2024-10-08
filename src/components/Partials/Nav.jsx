import React, { useEffect, useState } from 'react'
import NavRight from './NavRight'
import NavLoginRight from './NavLoginRight'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadStudent } from '../../store/actions/studentAction';
import EmployeNavLogin from './EmployeNavLogin.jsx';
import { loadEmploye } from '../../store/actions/employeAction.jsx';

const Nav = ({isLoggedIn,student ,employe}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname != '/') {
      if(student === null)dispatch(loadStudent(navigate));
      if(employe === null)dispatch(loadEmploye(navigate));
    }
  },[student,employe])


  return (
    <div className='w-full fixed top-0 left-0 px-44 flex items-center justify-between bg-white z-[9] shadow border-b'>
      <div className="left flex items-center">
        <Link to='/'><img className='h-10  -mt-2 mr-10' src={`https://upload.wikimedia.org/wikipedia/en/8/8b/Internshala_company_logo.png`} alt="" /></Link>
        {!isLoggedIn &&
          <>
            <h1 className=" hover:bg-blue-50 h-full py-5 px-4 cursor-pointer font-medium group">Internships <i className="fa-solid fa-caret-down  group-hover:animate-[bounce_1s_linear_1.5] ml-1 fa-md"></i></h1>
            <h1 className=" hover:bg-blue-50 h-full py-5 px-4 cursor-pointer font-medium group">Jobs <i className="fa-solid fa-caret-down  group-hover:animate-[bounce_1s_linear_1.5] ml-1 fa-md"></i></h1>
          </>
        }
      </div>
      {isLoggedIn && student ?
        <NavLoginRight student={student} /> : employe ? <EmployeNavLogin employe={employe} />:
        <NavRight />
      }
    </div>
  )
}

export default Nav