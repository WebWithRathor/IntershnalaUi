import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Instance } from '../../utils/Axios';
import { loadStudent } from '../../store/actions/studentAction';

const Skill = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [Skill, setSkill] = useState('');

    const AddSkill = async () => {
            try {
                const { data } = await Instance.post('/resume/add-skill', {
                    Skill
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
                <h2 className="text-xl font-medium mb-7 text-center"> Skills</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700">Skill</label>
                        <input onChange={(e) => setSkill(e.target.value)} required value={Skill} type="text" placeholder="e.g. Github, JavaScript.." className="mt-1 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <button onClick={AddSkill} className="w-full bg-blue-500 text-white py-2 rounded-md shadow-sm hover:bg-blue-600">Save</button>
            </div>
        </div>
    )
}

export default Skill