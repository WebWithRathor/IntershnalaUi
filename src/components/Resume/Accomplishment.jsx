import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Instance } from '../../utils/Axios';
import { useDispatch } from 'react-redux';
import { loadStudent } from '../../store/actions/studentAction';

const Accomplishment = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [description, setdescription] = useState('');
    const [descriptionCount, setdescriptionCount] = useState(description.length);

    const AddAccomplishment = async () => {
        try {
            const { data } = await Instance.post('/resume/add-accomp', {
                description
            });
            dispatch(loadStudent());
            navigate(-1)
        } catch (error) {
            console.log(error);
            alert(error.response.data.error.message);
        }
    }

    return (
        <div className='h-screen scroller-none w-full bg-black/[.5] fixed top-0 left-0 z-[99] flex items-start justify-center ' >
            <div className="bg-white p-8 rounded-lg shadow-lg w-2/5 mt-20 relative ">
                <i onClick={() => navigate(-1)} className='fa-solid cursor-pointer fa-xmark text-lg absolute right-8 top-5' ></i>
                <h2 className="text-xl font-medium mb-7 text-center"> Additional details</h2>
                <div className="mb-2">
                        <label className="block text-gray-800 font-medium text-sm mb-3">Add your accomplishments such as rewards, recognitions, test scores, certifications, etc. here. You may also add information such as seminars/workshops you have attended or any interests/hobbies you have pursued.
                        </label>
                        <textarea value={description} rows={8} onChange={(e) => { setdescription(e.target.value); setdescriptionCount(description.length) }} placeholder="Short description of work done (max 250 char)" maxLength="1000" className="mt-1 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm"></textarea>
                        <div className="text-right text-gray-500 text-sm">{descriptionCount}/250</div>
                    </div>
                    <button onClick={AddAccomplishment} className="w-full bg-blue-500 text-white py-2 rounded-md shadow-sm hover:bg-blue-600">Save</button>
            </div>
        </div>
    )
}

export default Accomplishment