import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen w-full bg-black/[.5] fixed top-0 z-10 flex items-center justify-center " >
            <form className="h-max rounded w-1/4 bg-white p-5">
                <i onClick={() => navigate(-1)} className="cursor-pointer fa-solid fa-xmark block ml-auto "></i>
                <div className="flex justify-center w-full my-5">
                    <h1 className='text-md font-semibold w-1/2 text-center py-2 border-b-2 border-blue-500 text-blue-500' >Student</h1>
                    <h1 className='text-md font-semibold w-1/2 text-center py-2 ' >Employer / T&P</h1>
                </div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder='john@example.com' className="w-full border rounded py-2 px-3 mt-2 focus:outline-none focus:ring-blue-500" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder='Must be atleast 6 Characters' className="w-full border rounded py-2 px-3 mt-2 focus:outline-none focus:ring-blue-500" required />
                <a className='font-semibold text-blue-500  ml-auto mt-4 w-max block' href="">Forgot Password ?</a>
                <button className='px-4 w-full mt-5 py-2 rounded font-semibold bg-sky-500 border-2  border-sky-500 hover:bg-transparent hover:text-sky-500 transition-all text-white'>Login</button>
                <p className='text-sm text-center mt-2'>New to Internshala? Register (<a className='font-semibold text-blue-500' href="">Student</a> / <a className='font-semibold text-blue-500' href=''>Company</a>)</p>

            </form>
        </div>
    )
}

export default Login