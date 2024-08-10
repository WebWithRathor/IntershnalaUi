import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Instance } from '../../utils/Axios';

const EmployeNavLogin = ({employe}) => {
  const logout = async ()=>{
    try {
      await Instance.post('/employe/signout');
      localStorage.setItem('isLoggedIn',false);
      location.reload();
      alert('Successfully logged out');
    } catch (error) {
      alert(error.response.data.error.message)
    }
  }
  console.log(employe);
  

  

  return (
    <div className='flex items-center'>
      <h1 className=" hover:bg-blue-50 h-full py-5 px-4 cursor-pointer font-medium group">Internships <i className="fa-solid fa-caret-down  group-hover:animate-[bounce_1s_linear_1.5] ml-1 fa-md"></i></h1>
      <h1 className=" hover:bg-blue-50 h-full py-5 px-4 cursor-pointer font-medium group">Jobs <i className="fa-solid fa-caret-down  group-hover:animate-[bounce_1s_linear_1.5] ml-1 fa-md"></i></h1>
      <i className="fa-regular fa-comments ml-5 text-lg"></i>
      <div className="profile flex items-center h-full py-4 px-4 gap-1 group hover:bg-blue-50 cursor-pointer relative  ml-8">
        <img src={employe && employe.organizationLogo.url} className='aspect-square h-8 object-cover rounded-full' alt="" />
        <i className="fa-solid fa-caret-down  group-hover:animate-[bounce_1s_linear_1.5] ml-1 fa-md"></i>
        <div className="absolute top-full group-hover:scale-100 transition-all origin-top-right scale-0 right-0 w-[17vw] bg-white border border-gray-200 rounded-md shadow-lg">
          <div className=" p-3 border-b">
            <h1 className='font-medium'>{employe && employe.firstname + " " + employe.lastname}</h1>
            <h1 className='text-sm'>{employe && employe.email}</h1>
          </div>
          <ul className="p-2 space-y-1 flex flex-col">
            <Link to='/' className="hover:bg-gray-100 p-2 font-medium rounded-md cursor-pointer">Home</Link>
            <Link className="hover:bg-gray-100 p-2 text-sm  rounded-md cursor-pointer">My Jobs</Link>
            <Link className="hover:bg-gray-100 p-2 text-sm  rounded-md cursor-pointer">My Internships</Link>
            <Link to='Employe/profile/post' className="hover:bg-gray-100 p-2 text-sm  rounded-md cursor-pointer">Post a Job/Internship</Link>
            <div className="hover:bg-gray-100 p-2 group/drop text-sm  rounded-md cursor-pointer ">More  
              <div className="dropdown hidden group-hover/drop:block top-full w-full mt-2">
                <Link to='/changepassword' className='hover:bg-white px-1 py-2 text-sm  rounded-md cursor-pointer block'>Change Password</Link>
                <Link onClick={()=>logout()} className='hover:bg-white px-1 py-2 text-sm  rounded-md cursor-pointer block'>Logout</Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EmployeNavLogin