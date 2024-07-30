import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full fixed top-0 left-0 px-44 flex items-center justify-between bg-white shadow border-b'>
        <div className="left flex items-center">
            <img className='h-10 -mt-2 mr-10' src="https://upload.wikimedia.org/wikipedia/en/8/8b/Internshala_company_logo.png" alt="" />
            <h1 className=" hover:bg-blue-50 h-full py-5 px-4 cursor-pointer font-medium group">Internships <i className="fa-solid fa-caret-down  group-hover:animate-[bounce_1s_linear_1.5] ml-1 fa-md"></i></h1>
            <h1 className=" hover:bg-blue-50 h-full py-5 px-4 cursor-pointer font-medium group">Jobs <i className="fa-solid fa-caret-down  group-hover:animate-[bounce_1s_linear_1.5] ml-1 fa-md"></i></h1>
        </div>
        <div className="right flex gap-5 items-center">
            <div className="search  flex gap-2 items-center">
            <i className="fa-solid text-sm fa-magnifying-glass"></i>
            <h1 className=''>Search</h1>
            </div>
            <Link to='/login'>
            <button className='px-4 py-1 hover:bg-sky-500 hover:text-white transition-all rounded font-semibold border-2 border-sky-500 text-sky-500'>Login</button>
            </Link>
            <Link to='/student/signup'>
            <button className='px-4 py-1 rounded font-semibold bg-sky-500 border-2  border-sky-500 hover:bg-transparent hover:text-sky-500 transition-all text-white'>Candidate Sign up</button>
            </Link>
            <Link to='/employe/signup'>
            <button className='px-4 py-1 rounded font-semibold bg-sky-500 border-2  border-sky-500 hover:bg-transparent hover:text-sky-500 transition-all text-white'>Employe Sign up</button>
            </Link>
        </div>
    </div>
  )
}

export default Nav