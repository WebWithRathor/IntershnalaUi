import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Instance } from '../../utils/Axios';
import { useDispatch } from 'react-redux';
import { loadStudent } from '../../store/actions/studentAction';

const Training = ({update}) => {
    const details = useLocation().state
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [profile, setprofile] = useState( details && details.profile ||'');
    const [Online, setOnline] = useState( details && details.location === 'Work from Home' ||false);
    const [description, setdescription] = useState( details && details.description ||'')
    const [descriptionCount, setdescriptionCount] = useState(description.length);
    const [startYear, setstartYear] = useState( details && details.startYear ||"");
    const [endYear, setendYear] = useState( details && details.endYear ||"");
    const [organizationName, setorganizationName] = useState( details && details.organizationName ||'');
    const [location, setlocation] = useState( details && details.location != 'Work from Home' && details.location ||'');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await Instance.post(`/resume/${update ? `edit-cour/${details && details.id}` : 'add-cour'}`, {
                profile, 
                description, 
                startYear, 
                endYear, 
                organizationName, 
                location : Online ? "Work from Home" : location,
            });
            console.log(data);
            dispatch(loadStudent())
            navigate(-1)
        } catch (error) {
            console.log(error);
            
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
                <h2 className="text-xl font-medium mb-7 text-center">Training details</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Profile*</label>
                        <input onChange={(e) => setprofile(e.target.value)} required value={profile} type="text" placeholder="e.g. Sales & Marketing" className="mt-1 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Organization*</label>
                        <input onChange={(e) => setorganizationName(e.target.value)} required value={organizationName} type="text" placeholder="e.g. Internshala" className="mt-1 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Location*</label>
                        <input onChange={(e) => setlocation(e.target.value)} required value={location} type="text" placeholder="e.g. Mumbai" disabled={Online} className="mt-1 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="workFromHome" checked={Online} onChange={() => setOnline(!Online)} className="mr-2" />
                        <label htmlFor="workFromHome" className="text-gray-700">Online</label>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700">Start date*</label>
                            <input onChange={(e) => setstartYear(e.target.value)} required value={startYear} type="date" className="mt-1 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label className="block text-gray-700">End date*</label>
                            <input onChange={(e) => setendYear(e.target.value)} value={endYear} required type="date" className="mt-1 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Description <span className="text-gray-400">(Optional)</span></label>
                        <textarea value={description} rows={8} onChange={(e) => { setdescription(e.target.value); setdescriptionCount(description.length + 1) }} placeholder="Short description of work done (max 700 char)" maxLength="700" className="mt-1 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm"></textarea>
                        <div className="text-right text-gray-500 text-sm">{descriptionCount}/700</div>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md shadow-sm hover:bg-blue-600">Save</button>
                </form>
            </div>
        </div>
    )
}

export default Training