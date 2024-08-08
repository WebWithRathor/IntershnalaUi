import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Instance } from '../../utils/Axios';
import { useDispatch } from 'react-redux';
import { loadStudent } from '../../store/actions/studentAction';

const Education = ({update}) => {
    const details = useLocation().state
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [organizationName, setorganizationName] = useState(details && details.organizationName || "");
    const [startYear, setstartYear] = useState(details && details.startYear || "");
    const [endYear, setendYear] = useState( details && details.endYear || "");
    const [degree, setdegree] = useState(details && details.degree || "");
    const [stream, setstream] = useState(details && details.stream || "");
    const [resultType, setresultType] = useState( details && details.resultType || 'Percentage');
    const [result, setresult] = useState( details && details.result || '');

    

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await Instance.post(`/resume/${update ? `edit-edu/${details && details.id}` : 'add-edu'}`, {
                organizationName,
                startYear,
                endYear,
                degree,
                stream,
                resultType,
                result
            });
            dispatch(loadStudent());
            navigate(-1)
        } catch (error) {
            console.log(error);
            alert(error.response.data.error.message);
        }
    }
    useEffect(()=>{
        if(resultType === 'Percentage' && result >100){
            setresult(100);
        }else if(resultType === 'CGPA' && result >10){
            setresult(10);
        }
        if(endYear > 2030){
            setendYear(2030);
        }
        if(startYear > 2024){
            setstartYear(2024);
        }
    },[resultType,endYear,startYear,result])





    return (
        <div className='h-screen scroller-none w-full bg-black/[.5] fixed top-0 left-0 z-[99] flex items-center justify-center overflow-y-auto py-32' >
            <div className="box w-[45%] bg-white rounded-lg relative">
                <i onClick={() => navigate(-1)} className='fa-solid cursor-pointer fa-xmark text-lg absolute right-8 top-5' ></i>
                <div className="bg-white p-10 rounded-lg shadow-lg w-full">
                    <h2 className="text-xl font-medium mb-10 text-center">Graduation details/ Post graduation details</h2>

                    <form onSubmit={submitHandler}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Organization Name*</label>
                            <input maxLength={30} onChange={(e) => setorganizationName(e.target.value)} required value={organizationName} type="text" placeholder="e.g. Hindu College" className="mt-1 block w-full border-gray-300 border px-2 py-2 rounded outline-none shadow-sm" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-700">Start year*</label>
                                <input  onChange={(e) => setstartYear(e.target.value)} required value={startYear} type='Number' placeholder='start year' className="mt-1 block w-full border-gray-300 border px-2 py-2 rounded outline-none shadow-sm" />
                            </div>
                            <div>
                                <label className="block text-gray-700">End year</label>
                                <input onChange={(e) => setendYear(e.target.value)} value={endYear} type='Number' placeholder='end year' className="mt-1 block w-full border-gray-300 border px-2 py-2 rounded outline-none shadow-sm" />

                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-700">Degree*</label>
                                <input maxLength={20} onChange={(e) => setdegree(e.target.value)} required value={degree} type="text" placeholder="e.g. B.Sc (Hons.)" className="mt-1 block w-full border-gray-300 border px-2 py-2 rounded outline-none shadow-sm" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Stream <span className="text-gray-400">(Optional)</span></label>
                                <input maxLength={30} onChange={(e) => setstream(e.target.value)} value={stream} type="text" placeholder="e.g. Economics" className="mt-1 block w-full border-gray-300 border px-2 py-2 rounded outline-none shadow-sm" />
                            </div>
                        </div>

                        <div className="mb-4 p-4 bg-gray-100 rounded-md">
                            <p className="text-gray-700">
                                Example: If your degree is B.Sc in Chemistry, then select Bachelor of Science (B.Sc) in <b>degree</b> and Chemistry in <b>streams</b>.
                            </p>
                            <p className="text-gray-700 mt-2">
                                If you can't find your degree, check for typos or different ways of writing your degree or choose from the closest available. Write to
                                <a href="mailto:support@internshala.com" className="text-blue-500"> support@internshala.com</a> if you are pursuing a degree not available in the list.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-700">Performance Score <span className="text-gray-400">(Recommended)</span></label>
                                <select defaultValue={resultType} onChange={(e) => setresultType(e.target.value)} className="mt-1 block w-full border-gray-300 border px-2 py-2 rounded outline-none shadow-sm">
                                    <option>Percentage</option>
                                    <option>CGPA</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700">&nbsp;</label>
                                <input onChange={(e) => setresult(e.target.value)} value={result} type="number" placeholder={resultType === 'Percentage' ?"Out of 100" : 'Out of 10'} min={0} max={resultType === 'CGPA' ? 10 : 100} className="mt-1 block w-full border-gray-300 border px-2 py-2 rounded outline-none shadow-sm" />
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md shadow-sm hover:bg-blue-600">Save</button>
                    </form>
                </div></div>
        </div>
    )
}

export default Education