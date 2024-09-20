import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Instance } from '../../utils/Axios';

const ForgetPassword = () => {

  const navigate = useNavigate();
  const [email, setemail] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const {data} =  await Instance.post('/employe/ForgetPassword',{email});
      navigate('/changepassword', { state: data.url})
    } catch (error) {
      
    }
    
  }

  return (
    <>
      
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1 onClick={() => navigate(-1)} className='flex cursor-pointer items-center gap-2 text-blue-600 text-[1vw] font-medium  absolute left-20 top-24' > <i className='fa-solid fa-arrow-left-long mt-1'></i> Back</h1>

        <div className="border bg-white p-8 rounded-md  w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-6">Forget password</h2>

          <form onSubmit={submitHandler} >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="oldPassword">Email</label>
              <input
                required
                type="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Send Link
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword