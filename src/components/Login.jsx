import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Instance } from '../utils/Axios';

const Login = () => {
    const navigate = useNavigate();
    const [type, settype] = useState('student');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        login();
    }
    
    const login = async () => {
        try {
            const data = await Instance.post(`/${type}/signin`, {
                email,
                password,
            });
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('type', type);
            navigate('/')
        } catch (error) {
            alert(error.response.data.error.message);
        }
    }


    return (
        <div className="h-screen w-full bg-black/[.5] fixed top-0 z-10 flex items-center justify-center " >
            <form onSubmit={submitHandler} className="h-max rounded w-1/2 md:w-1/3 lg:w-1/4 bg-white p-5">
                <i onClick={() => navigate(-1)} className="cursor-pointer fa-solid fa-xmark block ml-auto "></i>
                <div className="flex justify-center w-full my-5">
                    <h1 onClick={(e) => settype('student')} className={`text-md font-semibold cursor-pointer w-1/2 text-center py-2 border-b-2 ${type === 'student' ? 'border-blue-500 text-blue-500' : 'border-transparent'}`} >Student</h1>
                    <h1 onClick={(e) => settype('employe')} className={`text-md font-semibold cursor-pointer w-1/2 text-center py-2 border-b-2 ${type === 'employe' ? 'border-blue-500 text-blue-500' : 'border-transparent'}`} >Employer / T&P</h1>
                </div>
                <label htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" name="email" placeholder='john@example.com' className="w-full border rounded py-2 px-3 mt-2 focus:outline-none focus:ring-blue-500" required />
                <label htmlFor="password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" name="password" placeholder='Must be atleast 6 Characters' className="w-full border rounded py-2 px-3 mt-2 focus:outline-none focus:ring-blue-500" required />
                <a className='font-semibold text-blue-500  ml-auto mt-4 w-max block' href="">Forgot Password ?</a>
                <button className='px-4 w-full mt-5 py-2 rounded font-semibold bg-sky-500 border-2  border-sky-500 hover:bg-transparent hover:text-sky-500 transition-all text-white'>Login</button>
                <p className='text-sm text-center mt-2'>New to Internshala? Register (<Link to='/student/signup' className='font-semibold text-blue-500' href="">Student</Link> / <Link to='/employe/signup' className='font-semibold text-blue-500' href=''>Company</Link>)</p>

            </form>
        </div>
    )
}

export default Login