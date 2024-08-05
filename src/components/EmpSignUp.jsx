import React, { useEffect, useState } from 'react'
import LogDetails from './Partials/LogDetails'
import { useNavigate } from 'react-router-dom';
import StatsSection from './Partials/StatsSection';
import { Instance } from '../utils/Axios';

const EmpSignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        
    }
    const employeSignUp = async () => {
        try {
            const data = await Instance.post('/student/signup');
        } catch (error) {
            console.log(error.response.data.error);
        }
    }
    useEffect(()=>{
        employeSignUp();
    },[])
    


    return (
        <div className='min-h-screen h-full relative w-fullrelative z-[0] pt-0.5'>
            <i onClick={() => navigate(-1)} className="cursor-pointer fa-solid fa-arrow-left-long text-2xl absolute top-7 left-10 "></i>
            <img className='w-full h-screen object-cover absolute z-[-1] top-0' src="https://internshala.com/static/images/registration/employer/registration_new/images/banner/r1255_banner_new.png" alt="" />
            <div className="flex ">
                <div className="heads ml-36 pt-24">
                    <h1 className='flex text-5xl font-bold'>Hire Interns & Freshers <img className='-ml-3' src="https://internshala.com/static/images/registration/employer/registration_new/images/banner/faster.svg" alt="" /> </h1>
                    <h2 className='text-[1.57rem] text-zinc-600 font-semibold'>Post Internships for <span className='text-black font-bold'>Free</span> & Hire Talent with up to 2 Years of Experience</h2>
                </div>
                <form onSubmit={submitHandler} className='max-w-[32rem] w-[28%] ml-auto mr-14 shadow-md mt-24 mb-24 shadow-blue-100 rounded-lg bg-white p-4'>
                    <LogDetails
                        btn={'Sign Up'}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        firstName={firstName}
                        setFirstName={setFirstName}
                        lastName={lastName}
                        setLastName={setLastName}
                        number={number}
                        setNumber={setNumber}
                    />
                </form>
            </div>
            <StatsSection />
        </div>

    )
}

export default EmpSignUp