import React, { useEffect, useState } from 'react'
import Nav from '../Partials/Nav'
import { useDispatch, useSelector } from 'react-redux';
import { loadEmploye } from '../../store/actions/employeAction';
import { Instance } from '../../utils/Axios';
import { useNavigate } from 'react-router-dom';
import JobForm from './JobForm';
import InternshipForm from './InternshipForm';

const PostJobintern = () => {
    const employe = useSelector(store => store.employeSlice.employe);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoggedIn, setisLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) || false);
    const [postType, setpostType] = useState('Job')


    // employe , profile , skill* , internshipType , openings , from ,to, duration ,responsibility , stipend(status,'Negotiable', 'Fixed','performance based','unpaid') , perks , assessments  
    // salary , title , 


    useEffect(() => {
        if (employe === null) dispatch(loadEmploye(navigate));
    }, [ employe])

    return (
        <>
            <Nav isLoggedIn={isLoggedIn} employe={employe} />
            <h1 onClick={() => navigate(-1)} className='flex cursor-pointer items-center gap-2 text-blue-600 text-[1vw] font-medium  absolute left-20' > <i className='fa-solid fa-arrow-left-long mt-1'></i> Back</h1>
            <div className="w-3/5 mx-auto bg-white p-8 mt-24 mb-16 rounded-lg shadow-md relative">

                <h2 className="text-2xl font-semibold mb-6">{postType} details</h2>
                <div className= "mb-10 p-2 group/drop relative w-1/4  border  rounded-md cursor-pointer flex items-center "><span className='font-medium mr-1'>Post </span> : {postType} <i className='fa-solid group-hover/drop:rotate-180 transition-all duration-300  fa-caret-down absolute right-5'></i>
                    <div className="dropdown bg-white border rounded-lg left-0 absolute scale-0 transition-all origin-top-left group-hover/drop:scale-100 top-full w-full mt-2">
                        <div onClick={()=>setpostType('Job')} className='hover:bg-gray-100   p-2   rounded-md cursor-pointer block'>Job</div>
                        <div onClick={()=>setpostType('Internship')} className='hover:bg-gray-100   p-2   rounded-md cursor-pointer block'>Internship</div>
                    </div>
                </div>
                {postType === 'Job' ?
                <JobForm employe={employe} navigate={navigate} />
                :
                <InternshipForm employe={employe} navigate={navigate} />
                }

            </div>
        </>
    )
}

export default PostJobintern