import React, { useState } from 'react'
import Nav from './Partials/Nav'
import { useLocation, useNavigate } from 'react-router-dom'
import { Instance } from '../utils/Axios';

const ChangePassword = () => {

    const location = useLocation();
    const state = location.state || '';
    const navigate = useNavigate();
    const [oldPassword, setoldPassword] = useState('')
    const [newPassword, setnewPassword] = useState('')
    const [retypePassword, setretypePassword] = useState('')



    const handleSubmit = async (e) => {
        e.preventDefault();
        retypePassword != newPassword ? alert('Passwords do not match') : '';
        try {
            const { data } = await Instance.post('/student/changepassword', {
                oldPassword,
                newPassword
            })
            alert('Password changed successfully');
            navigate(-1);
        } catch (error) {
            alert(error.response.data.error.message);
        }

    }

    const handleResetSubmit = async (e) => {
        e.preventDefault();
        retypePassword != newPassword ? alert('Passwords do not match') : '';
       
        
        try {
            const {data}=await Instance.post(state.split('.com')[1], {
                password : newPassword
            })
            alert('Password changed successfully');
            navigate('/');
        } catch (error) {
            alert(error.response.data.error.message);
        }

    }


    return (
        <>
            <Nav />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <h1 onClick={() => navigate(-1)} className='flex cursor-pointer items-center gap-2 text-blue-600 text-[1vw] font-medium  absolute left-20 top-24' > <i className='fa-solid fa-arrow-left-long mt-1'></i> Back</h1>

                <div className="border bg-white p-8 rounded-md  w-full max-w-sm">
                    <h2 className="text-2xl font-semibold text-center mb-6">Change password</h2>

                    <form onSubmit={ state === '' ? handleSubmit : handleResetSubmit}>
                        {state === '' ?
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="oldPassword">Old password</label>
                                <input
                                    required
                                    type="password"
                                    name="oldPassword"
                                    id="oldPassword"
                                    value={oldPassword}
                                    onChange={(e) => setoldPassword(e.target.value)}
                                    className={`mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                />

                            </div> : ''
                        }
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="newPassword">New password</label>
                            <input
                                required
                                type="password"
                                name="newPassword"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setnewPassword(e.target.value)}
                                className={`mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />

                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="retypePassword">Retype password</label>
                            <input
                                required
                                type="password"
                                name="retypePassword"
                                id="retypePassword"
                                value={retypePassword}
                                onChange={(e) => setretypePassword(e.target.value)}
                                className={`mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                            />

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default ChangePassword