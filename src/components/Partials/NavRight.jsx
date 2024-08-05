import React from 'react'
import { Link } from 'react-router-dom'


const NavRight = () => {
  return (
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
  )
}

export default NavRight