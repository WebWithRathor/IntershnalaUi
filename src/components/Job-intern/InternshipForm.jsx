import React, { useEffect, useState } from 'react';
import { Instance } from '../../utils/Axios';
import { loadStudent } from '../../store/actions/studentAction';
import { useDispatch } from 'react-redux';

const InternshipForm = ({ employe , navigate }) => {
    const [orgName, setOrgName] = useState('');
    const [profile, setProfile] = useState('');
    const [skill, setSkill] = useState('');
    const [internshipType, setInternshipType] = useState('Remote');
    const [openings, setOpenings] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [amount, setamount] = useState('');
    const [duration, setDuration] = useState('');
    const [responsibility, setResponsibility] = useState('');
    const [stipend, setStipend] = useState('Negotiable');
    const [perks, setPerks] = useState('');
    const [assessments, setAssessments] = useState('');
    

    const submitHandle = async (e) => {
        e.preventDefault();

        try {
            const { data } = await Instance.post('/employe/internship/create', {
                profile, skill,
                internshiptype:internshipType, openings, from, to, duration, responsibility,
                "stipend.status": stipend,
                "stipend.amount": amount,
                perks, assessments
            });
            navigate('/');
            
        } catch (error) {
            console.log(error);

        }

    }

    return (
        <form className='' onSubmit={submitHandle} >
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="profile">
                    Profile
                </label>
                <input
                    required
                    type="text"
                    id="profile"
                    maxLength={20}
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                    placeholder="Profile"
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="skill">
                    Skill's
                </label>
                <input
                    required
                    type="text"
                    id="skill"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    placeholder="Skill please seprate it by ,"
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="internshipType">
                    Internship Type
                </label>
                <select
                    id="internshipType"
                    value={internshipType}
                    onChange={(e) => setInternshipType(e.target.value)}
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                >
                    <option value="Remote">Remote</option>
                    <option value="In office">In office</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="openings">
                    Openings
                </label>
                <input
                    required
                    type="number"
                    min={1}
                    max={200}
                    id="openings"
                    value={openings}
                    onChange={(e) => setOpenings(e.target.value)}
                    placeholder="Openings"
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="from">
                    From
                </label>
                <input
                    required
                    type="date"
                    id="from"
                    max={to}
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="to">
                    To
                </label>
                <input
                    required
                    type="date"
                    id="to"
                    min={from}
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="duration">
                    Duration
                </label>
                <input
                    required
                    type="text"
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Duration"
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="responsibility">
                    Responsibility
                </label>
                <textarea
                    id="responsibility"
                    value={responsibility}
                    onChange={(e) => setResponsibility(e.target.value)}
                    placeholder="Responsibility"
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="stipend">
                    Stipend
                </label>
                <select
                    id="stipend"
                    value={stipend}
                    onChange={(e) => setStipend(e.target.value)}
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                >

                    <option value="Negotiable">Negotiable</option>
                    <option value="Fixed">Fixed</option>
                    <option value="performance based">Performance Based</option>
                    <option value="unpaid">Unpaid</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="amount">
                    amount
                </label>
                <input
                    required
                    type="number"
                    id="amount"
                    min={1000}
                    max={200000}
                    disabled={stipend === 'Unpaid'}
                    value={amount}
                    onChange={(e) => setamount(e.target.value)}
                    placeholder="amount"
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="perks">
                    Perks
                </label>
                <input
                    required
                    type="text"
                    id="perks"
                    value={perks}
                    onChange={(e) => setPerks(e.target.value)}
                    placeholder="Perks"
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="assessments">
                    Assessments
                </label>
                <textarea
                    id="assessments"
                    value={assessments}
                    onChange={(e) => setAssessments(e.target.value)}
                    placeholder="Assessments"
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <button className='w-full py-3 text-center bg-blue-500 rounded-lg text-white font-medium'>Post a Internship</button>
        </form>
    );
};

export default InternshipForm;
