
import React from 'react'

const LogDetails = ({btn}) => {
    return (
        <>
            <label htmlFor="Email" className='mt-4 inline-block text-lg'>Email</label>
            <input  type="email" name="Email"  className='w-full relative z-[99] outline-sky-500 rounded border border-zinc-300 px-2 py-2 mt-1' placeholder='Email' />
            <label htmlFor="password" className='mt-4 inline-block text-lg'>Password</label>
            <input  type="password" className='w-full relative z-[99] outline-sky-500 rounded border border-zinc-300 px-2 py-2 mt-1' placeholder='Password' />
            <div className="flex w-full items-center gap-4">
                <div className="w-1/2">
                    <label htmlFor="fName" className='mt-4 inline-block text-lg'>First Name</label>
                    <input type="text" className='w-full outline-sky-500 rounded border border-zinc-300 px-2 py-2 mt-1' placeholder='Your First Name' />
                </div>
                <div className="w-1/2">
                    <label htmlFor="lName" className='mt-4 inline-block text-lg'>Last Name</label>
                    <input  type="text" className='w-full outline-sky-500 rounded border border-zinc-300 px-2 py-2 mt-1' placeholder='Your Last Name' />
                </div>
            </div>
            <label htmlFor="number" className='mt-4 inline-block text-lg'>Mobile Number</label>
            <div className="flex w-full items-center gap-4">
                <div className="w-[4vw]">
                    <input type="text" className='w-full outline-sky-500 text-center rounded border border-zinc-300 px-2 py-2 mt-1' value={"+91"} placeholder='+91' />
                </div>
                <div className="w-full">
                    <input type="text" className='w-full outline-sky-500 rounded border border-zinc-300 px-2 py-2 mt-1' placeholder='Enter Mobile Number' />
                </div>
            </div>
            <h4 className='text-sm mt-6'>By clicking on <span className='text-sky-500 font-medium'>{btn}</span>, you agree to our T&C.</h4>
            <button className='px-6 w-full bg-sky-500 hover:bg-sky-400 duration-300 font-bold text-white py-[.6rem] rounded mt-2'>{btn}</button>
            <h4 className='mt-4 text-center font-medium text-zinc-500'>Already registered? <span className='text-sky-600'>Login</span> </h4>


        </>
    )
}

export default LogDetails
