import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Instance } from '../../utils/Axios';

const Projects = () => {
    const navigate = useNavigate();
    const [Title, setTitle] = useState('');
    const [URL, setURL] = useState('')
    const [Online, setOnline] = useState(false);
    const [description, setdescription] = useState('')
    const [descriptionCount, setdescriptionCount] = useState(description.length);
    const [startMonth, setstartMonth] = useState("");
    const [endMonth, setendMonth] = useState("");
    const [organizationName, setorganizationName] = useState('');
    const [location, setlocation] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await Instance.post('/resume/add-pro', {
                Title, 
                description, 
                startMonth, 
                endMonth, 
                URL
            });
            navigate(-1)
        } catch (error) {
            alert(error.response.data.error.message);
        }
    }

    useEffect(() => {
        if (Online) setlocation('')
    }, [Online])

    return (
        <div className='h-screen scroller-none w-full bg-black/[.5] fixed top-0 left-0 z-[99] flex items-center justify-center overflow-y-auto py-32' >
            <div className="bg-white p-8 rounded-lg shadow-lg w-2/5 mt-40 relative ">
                <i onClick={() => navigate(-1)} className='fa-solid cursor-pointer fa-xmark text-lg absolute right-8 top-5' ></i>
                <h2 className="text-xl font-medium mb-7 text-center">Projects details</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Title*</label>
                        <input onChange={(e) => setTitle(e.target.value)} required value={Title} type="text" placeholder="e.g. Sales & Marketing" className="mt-1 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700">Start date*</label>
                            <input onChange={(e) => setstartMonth(e.target.value)} required value={startMonth} type="month" className="mt-1 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-gray-700">End date*</label>
                            <input onChange={(e) => setendMonth(e.target.value)} value={endMonth} required type="month" className="mt-1 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm" />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700">Description <span className="text-gray-400">(Optional)</span></label>
                        <textarea value={description} rows={8} onChange={(e) => { setdescription(e.target.value); setdescriptionCount(description.length + 1) }} placeholder="Short description of work done (max 1000 char)" maxLength="1000" className="mt-1 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm"></textarea>
                        <div className="text-right text-gray-500 text-sm">{descriptionCount}/1000</div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Project link </label>
                        <p className='text-sm text-gray-600 my-1'>If you have multiple project links or an offline project, upload and provide link to google drive</p>
                        <input onChange={(e) => setURL(e.target.value)} required value={URL} type="text" placeholder="e.g. https://projectlink.com" className="mt-2 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md shadow-sm hover:bg-blue-600">Save</button>
                </form>
            </div>
        </div>
    )
}

export default Projects