import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadStudent } from '../../store/actions/studentAction';
import { Instance } from '../../utils/Axios';

const WorkSamples = ({ worksample }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [workSamples, setWorkSamples] = useState(worksample || []);
    const [Work, setWork] = useState('');
    const [WorkIcon, setWorkIcon] = useState('');
    const [WorkName, setWorkName] = useState('');
    const workInput = useRef(null);

    const icons = [
        { name: 'Analytics Vidhya', icon: 'fas fa-chart-line' },
        { name: 'Behance', icon: 'fab fa-behance' },
        { name: 'BitBucket', icon: 'fab fa-bitbucket' },
        { name: 'Blog', icon: 'fas fa-blog' },
        { name: 'Blogspot', icon: 'fab fa-blogger' },
        { name: 'CodeChef', icon: 'fas fa-utensils' },
        { name: 'Dribbble', icon: 'fab fa-dribbble' },
        { name: 'Figma', icon: 'fab fa-figma' },
        { name: 'GitHub', icon: 'fab fa-github' },
        { name: 'HackerRank', icon: 'fab fa-hackerrank' },
        { name: 'Hubpages', icon: 'fas fa-h-square' },
        { name: 'Kaggle', icon: 'fab fa-kaggle' },
        { name: 'Leetcode', icon: 'fas fa-code' },
        { name: 'Medium', icon: 'fab fa-medium' },
        { name: 'Play Store', icon: 'fab fa-google-play' },
        { name: 'Quora', icon: 'fab fa-quora' },
        { name: 'Substack', icon: 'fas fa-rss' },
        { name: 'Tumblr', icon: 'fab fa-tumblr' },
        { name: 'Wix', icon: 'fab fa-wix' },
        { name: 'Wordpress', icon: 'fab fa-wordpress' },
    ];

    const submit = async (e) => {
        if (e.target.value.includes('http://')) {
            try {
                const { data } = await Instance.post('/resume/add-work', {
                    WorkName,
                    url: Work,
                    WorkIcon
                });
                setWork('');
                dispatch(loadStudent());
            } catch (error) {
                alert(error.response.data.error.message);
            }
        } else {
            setWork('');
            alert('Please enter a valid URL starting with http:// or https://');
        }
    }

    const handleIconClick = async (icon) => {
        workInput.current.style.display = 'block';
        setWorkIcon(icon.icon);
        setWorkName(icon.name);
    };

    useEffect(() => {
        console.log(worksample);
    }, [worksample])

    return (
        <div className='h-screen scroller-none w-full bg-black/[.5] fixed top-0 left-0 z-[99] flex items-center justify-center overflow-y-auto py-32' >
            <div className="bg-white rounded-lg shadow-lg p-6 w-2/5 relative">
                <i onClick={() => navigate(-1)} className='fa-solid cursor-pointer fa-xmark text-lg absolute right-8 top-5' ></i>
                <h2 className="text-xl font-semibold mb-2">Work Samples</h2>
                <p className="mb-4">Showcase your skills by adding your work samples</p>
                <div className="flex flex-wrap gap-3  mb-4">
                    {icons.map((icon, index) => (
                        <button
                            key={index}
                            onClick={() => handleIconClick(icon)}
                            className="flex items-center justify-center text-gray-700 w-max py-1.5 px-3 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                        >
                            <i className={`${icon.icon} mr-2`}></i>
                            {icon.name}
                        </button>
                    ))}
                </div>
                <div ref={workInput} className="mb-4 hidden">
                    <label className="block text-gray-700">Work on <span className='font-semibold'> <i className={`${WorkIcon} mr-0.5 `} ></i> {WorkName}</span> link </label>
                    <input onKeyDown={(e) => e.code === "Enter" && submit(e)} onChange={(e) => setWork(e.target.value)} required value={Work} type="url" placeholder="e.g. https://myproject.com" className="mt-1 block w-full border px-2 py-2 outline-none border-gray-300 rounded-md shadow-sm" />
                </div>
                <h3 className="text-lg font-medium mb-1">Added work samples</h3>
                <ul className='list-disc ml-4 space-y-0.5'>
                    {workSamples.length > 0 && workSamples.map((e, i) => {
                        return <li key={i}>{e.WorkName} - <a href={e.url} className='text-blue-600' target="_blank">{e.url}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default WorkSamples