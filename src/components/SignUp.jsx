import React, { useState } from 'react'
import LogDetails from './Partials/LogDetails'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    return (
        <div className='min-h-screen h-[110vh] relative w-full'>
            <Link to='/'>
                <i className="cursor-pointer text-2xl left-10 top-10 absolute fa-solid fa-arrow-left-long block ml-auto "></i>
            </Link>
            <img className='h-full w-full object-cover mix-blend-multiply absolute top-0 z-[-1] opacity-30' src="https://img.freepik.com/free-vector/city-skyscrapers-illustration-with-clouds-blue-sky_1284-45721.jpg?w=996&t=st=1722351900~exp=1722352500~hmac=2a24f71cc8824f9cc69c72172be1250d432fd323ba5da988a80247ad016b3ea2" alt="" />
            <div className="items-center w-full flex-col pt-8">
                <h1 className='font-bold text-5xl text-zinc-700 text-center'>Sign-up and apply for free</h1>
                <h2 className='text-center text-[1.6rem] font-normal mt-4'>1,50,000+ companies hiring on Internshala</h2>
            </div>
            <form action="" className='max-w-[32rem] w-[30rem] shadow-md shadow-blue-100 rounded-lg mx-auto my-10 bg-white px-8 py-8'>
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
    )
}

export default SignUp