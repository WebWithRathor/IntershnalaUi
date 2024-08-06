import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadStudent } from '../../store/actions/studentAction';
import { Instance } from '../../utils/Axios';

const Responsibility = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const handleSave = async () => {
        try {
            const { data } = await Instance.post('/resume/add-res', {
                description
            });
            dispatch(loadStudent());
            navigate(-1)
        } catch (error) {
            alert(error.response.data.error.message);
        }
    };

    return (
        <div className='h-screen scroller-none w-full bg-black/[.5] fixed top-0 left-0 z-[99] flex items-center justify-center overflow-y-auto py-32' >
            <div className="bg-white rounded-lg shadow-lg p-6 w-2/5 h-max relative">
            <i onClick={() => navigate(-1)} className='fa-solid cursor-pointer fa-xmark text-lg absolute right-8 top-5' ></i>

                <h2 className="text-xl font-semibold text-center mb-7">Position of Responsibility</h2>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700  mb-1">
                        Description
                    </label>
                    <p className='text-sm text-gray-600 mb-2' >If you have been/are an active part of societies, conducted any events or led a team, add details here</p>
                    <textarea
                        id="description"
                        name="description"
                        rows="6"
                        maxLength={250}
                        className="block w-full outline-none p-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                        placeholder="e.g. Led a team of 5 volunteers to plan and conduct activities for literary event in college fest"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Responsibility