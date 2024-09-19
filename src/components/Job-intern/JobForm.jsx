import React, { useState } from 'react';
import { Instance } from '../../utils/Axios';

const JobForm = ({ employe, navigate }) => {
    const [title, setTitle] = useState('');
    const [skill, setSkill] = useState('');
    const [jobtype, setJobType] = useState('Remote');
    const [openings, setOpenings] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [preferences, setPreferences] = useState('');
    const [perks, setPerks] = useState('');
    const [assessments, setAssessments] = useState('');

    const submitHandle = async (e) => {
        e.preventDefault();
        
        try {
            const { data } = await Instance.post('/employe/job/create', {
                title,
                skill,
                salary,
                jobtype,
                openings,
                description,
                preferences,
                perks,
                assessments,
            });
            navigate('/');
            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className='' onSubmit={submitHandle} >
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="title">
                    Title
                </label>
                <input
                    required
                    type="text"
                    id="title"
                    minLength={3}
                    maxLength={20}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="skill">
                    Skills
                </label>
                <input
                    required
                    type="text"
                    id="skill"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    placeholder="Skills (separate with commas)"
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="jobtype">
                    Job Type
                </label>
                <select
                    id="jobtype"
                    value={jobtype}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                >
                    <option value="Remote">Remote</option>
                    <option value="In Office">In Office</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="openings">
                    Openings
                </label>
                <input
                    required
                    type="number"
                    id="openings"
                    min={0}
                    max={100}
                    value={openings}
                    onChange={(e) => setOpenings(e.target.value)}
                    placeholder="Openings"
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="description">
                    Description
                </label>
                <textarea
                    id="description"
                    value={description}
                    minLength={20}
                    maxLength={300}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Job Description"
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="salary">
                    Salary
                </label>
                <input
                    required
                    type="text"
                    id="salary"
                    value={salary}
                    min={1000}
                    maxLength={300000}
                    onChange={(e) => setSalary(e.target.value)}
                    placeholder="Salary"
                    className="w-full p-3 border outline-none border-gray-300 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="preferences">
                    Preferences
                </label>
                <input
                    type="text"
                    id="preferences"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                    placeholder="Preferences"
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
            <button className='w-full py-3 text-center bg-blue-500 rounded-lg text-white font-medium'>
                Post a Job
            </button>
        </form>
    );
};

export default JobForm;
