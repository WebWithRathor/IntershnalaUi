import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Instance } from '../../utils/Axios';
import { useDispatch, useSelector } from 'react-redux';
import { loadStudent } from '../../store/actions/studentAction';

const PersonalDetailsForm = () => {
    const navigate = useNavigate();
    const student = useSelector(store => store.studentSlice.student);
    const dispatch = useDispatch();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContactNumber] = useState('');
    const [city, setCurrentCity] = useState('');
    const [gender, setGender] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        await Instance.post('/student/update', {
            firstname,
            lastname,
            email,
            contact,
            city,
            gender,
        });
        dispatch(loadStudent());
        navigate(-1);
    };


    useEffect(() => {
        if (student) {
            setFirstName(student.firstname);
            setContactNumber(student.contact);
            setCurrentCity(student.city);
            setGender(student.gender);
            setLastName(student.lastname);
            setEmail(student.email);
        }
    }, [student])

    return (
        <div className='h-screen scroller-none w-full bg-black/[.5] fixed top-0 left-0 z-[99] flex items-center justify-center ' >
            <div className="p-6 w-2/5 mx-auto bg-white relative shadow-lg rounded-lg">
            <i onClick={() => navigate(-1)} className='fa-xmark fa-solid absolute right-5 top-3 cursor-pointer text-lg'></i>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Personal details</h2>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">First name</label>
                        <input
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">Last name (Optional)</label>
                        <input
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled // Assuming email cannot be changed
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">Contact number</label>
                        <input
                            type="text"
                            value={contact}
                            onChange={(e) => setContactNumber(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">Current city</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCurrentCity(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">Gender</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="Female"
                                    checked={gender === 'Female'}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="form-radio text-blue-500"
                                />
                                <span className="ml-2 text-gray-700">Female</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="Male"
                                    checked={gender === 'Male'}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="form-radio text-blue-500"
                                />
                                <span className="ml-2 text-gray-700">Male</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="Others"
                                    checked={gender === 'Others'}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="form-radio text-blue-500"
                                />
                                <span className="ml-2 text-gray-700">Others</span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Update
                    </button>
                </form>
            </div>
        </div>

    )
}

export default PersonalDetailsForm