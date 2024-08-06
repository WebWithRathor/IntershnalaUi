import React, { useEffect } from 'react'
import Nav from '../Partials/Nav'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Instance } from '../../utils/Axios';

const Resume = () => {
    const navigate = useNavigate();
    const student = useSelector(store => store.studentSlice.student)

    const DeleteHandler = (e,{target},type)=>{
        target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
         Instance.post(`/resume/delete-${type}/${e}`);
    }

    return (
        <>
            <Nav />
            <div className='h-full w-full pt-32'>
                <h1 onClick={() => navigate(-1)} className='flex items-center gap-2 text-blue-600 text-[1vw] font-medium  absolute left-20' > <i className='fa-solid fa-arrow-left-long mt-1'></i> Back</h1>
                <h1 className='text-3xl font-medium text-center mt-10'>Resume</h1>
                {student ?
                    <div className='w-3/5 mt-7 mb-10 border mx-auto rounded-lg overflow-hidden'>
                        <p className='w-full text-center border-b bg-gray-100 py-3 text-gray-600'>This is the resume companies will see when you apply</p>
                        <div className="details px-20 h-full">
                            <div className="info flex justify-between pt-10 pb-8 border-b">
                                <div className="">
                                    <h1 className='text-3xl font-medium capitalize'>{student.firstname} {student.lastname}</h1>
                                    <h1 className='text-gray-600 pt-1' >{student.email}</h1>
                                    <h1 className='text-gray-600 pt-0.5 ' >{student.contact}</h1>
                                    <h1 className='text-gray-600 pt-0.5 ' >{student.city ?? 'Bhopal'}</h1>
                                </div>
                                <h1 className='text-blue-600 font-semibold'><i className="fa-solid fa-download mr-2"></i>Download</h1>
                            </div>
                            <div className="education border-b flex py-7">
                                <h1 className='w-1/3 text-xs text-gray-600 font-medium uppercase' >Education</h1>
                                <div className="details flex-1 space-y-2">
                                    {student.resume.education.map((e, i) => {
                                        return <div key={e.id} className="dets relative">
                                            <h1 className='font-semibold'>{e.organizationName}</h1>
                                            <h2 className='text-gray-600'>{e.degree} {e.stream} <span className='text-sm'>{e.result != '' ? ("( " + e.result + " " + e.resultType + " )") : ''}</span></h2>
                                            <h2 className='text-gray-600'>{e.startYear} - {e.endYear}</h2>
                                            <div className="icons flex gap-3 absolute right-5 top-2">
                                                <i className="fa-solid fa-pen-to-square hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                                <i onClick={(elem)=>DeleteHandler(e.id,elem,'edu')} className="fa-solid fa-trash hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                            </div>
                                        </div>
                                    })}

                                    <Link to='education' className=' flex items-center gap-1 text-sm font-medium text-blue-600 w-max'><i className="fa-solid fa-plus -mb-0.5"></i>Add Education</Link>
                                </div>
                            </div>
                            <div className="work border-b flex py-7">
                                <h1 className='w-1/3 text-xs text-gray-600 font-medium uppercase' >work experience</h1>
                                <div className="details flex-1 space-y-4">
                                    {student.resume.experience.map((e, i) => {
                                        return <div key={e.id} className="dets relative">
                                            <h1 className='font-semibold'>{e.profile} ({e.type})</h1>
                                            <h2 className='text-gray-600'>{e.organizationName} ( {e.location} ) </h2>
                                            <h2 className='text-gray-600'>{e.startYear} - {e.endYear}</h2>
                                            <div className="icons flex gap-3 absolute right-5 top-2">
                                                <i className="fa-solid fa-pen-to-square hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                                <i onClick={(elem)=>DeleteHandler(e.id,elem,'exp')} className="fa-solid fa-trash hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                            </div>
                                        </div>
                                    })}
                                    <div className="flex gap-5">
                                        <Link to='job' className=' flex items-center gap-1 text-sm font-medium text-blue-600 w-max'><i className="fa-solid fa-plus -mb-0.5"></i>Add Job</Link>
                                        <Link to='internship' className=' flex items-center gap-1 text-sm font-medium text-blue-600 w-max'><i className="fa-solid fa-plus -mb-0.5"></i>Add Internship</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="position border-b flex py-7">
                                <h1 className='w-1/3 text-xs text-gray-600 font-medium uppercase' >position of responsibility</h1>
                                <div className="details flex-1 space-y-2">
                                    <ul className='list-disc ml-5 space-y-4'>
                                        {student.resume.responsibility.map((e, i) => {
                                            return <div key={i} className='relative'>
                                                <li  className='-mt-1.5 font-medium text-gray-700' >{e.description}</li>
                                                <div className="icons flex gap-3 absolute right-5 top-2">
                                                    <i className="fa-solid fa-pen-to-square hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                                    <i onClick={(elem)=>DeleteHandler(e.id,elem,'resp')} className="fa-solid fa-trash hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                                </div>
                                            </div>
                                        })}
                                    </ul>
                                    <Link to='responsibility' className='flex items-center gap-1 text-sm font-medium text-blue-600 w-max'><i className="fa-solid fa-plus -mb-0.5"></i>Add position of responsibility</Link>
                                </div>
                            </div>
                            <div className="training border-b flex py-7">
                                <h1 className='w-1/3 text-xs text-gray-600 font-medium uppercase' >training / courses</h1>
                                <div className="details flex-1 space-y-2">
                                    {student.resume.courses.map((e, i) => {
                                        return <div key={e.id} className="dets relative">
                                            <h1 className='font-semibold'>{e.profile}</h1>
                                            <h2 className='text-gray-600'>{e.organizationName} ( {e.location} ) </h2>
                                            <h2 className='text-gray-600'>{e.startYear} - {e.endYear}</h2>
                                            <div className="icons flex gap-3 absolute right-5 top-2">
                                                <i className="fa-solid fa-pen-to-square hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                                <i onClick={(elem)=>DeleteHandler(e.id,elem,'cour')} className="fa-solid fa-trash hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                            </div>
                                        </div>
                                    })}
                                    <Link to='training' className='flex items-center gap-1 text-sm font-medium text-blue-600 w-max'><i className="fa-solid fa-plus -mb-0.5"></i>Add training / courses</Link>
                                </div>
                            </div>
                            <div className="academics border-b flex py-7">
                                <h1 className='w-1/3 text-xs text-gray-600 font-medium uppercase' >ACADEMICS/ <br /> PERSONAL PROJECTS</h1>
                                <div className="details flex-1 space-y-2">
                                    {student.resume.projects.map((e, i) => {
                                        return <div key={e.id} className="dets relative">
                                            <a href={e.URL} target='_blank' className='font-semibold'>{e.Title}</a>
                                            <p className='text-gray-600 w-3/4 text-sm mb-1'>{e.description}</p>
                                            <h2 className='text-gray-600'>{e.startMonth} - {e.endMonth}</h2>
                                            <div className="icons flex gap-3 absolute right-5 top-2">
                                                <i className="fa-solid fa-pen-to-square hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                                <i onClick={(elem)=>DeleteHandler(e.id,elem,'pro')} className="fa-solid fa-trash hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                            </div>
                                        </div>
                                    })}
                                    <Link to='projects' className='flex items-center gap-1 text-sm font-medium  text-blue-600 w-max '><i className="fa-solid fa-plus -mb-0.5"></i>Add <span className='lowercase'>ACADEMICS/ PERSONAL PROJECTS</span></Link>
                                </div>
                            </div>
                            <div className="skill border-b flex py-7">
                                <h1 className='w-1/3 text-xs text-gray-600 font-medium uppercase' >SKILLS</h1>
                                <div className="details flex-1 ">
                                    <div className="flex gap-2 -mt-2 mb-3 items-center">

                                        {student.resume.skills.map((e, i) => {
                                            return <button key={i}
                                                className="flex gap-3 items-center justify-center text-gray-700 w-max py-1.5 px-3 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                                            >
                                                {e.Skill}<div className="icons flex gap-2 ">
                                                    <i className="fa-solid text-sm fa-pen-to-square text-gray-500 hover:text-gray-800"></i>
                                                    <i onClick={(elem)=>DeleteHandler(e.id,elem,'skill')}  className="fa-solid text-sm fa-trash text-gray-500 hover:text-gray-800"></i>
                                                </div>
                                            </button>
                                        })}
                                    </div>
                                    <Link to='skill' className='flex items-center gap-1 text-sm font-medium  text-blue-600 w-max '><i className="fa-solid fa-plus -mb-0.5"></i>Add <span className='lowercase'>SKILLS</span></Link>
                                </div>
                            </div>
                            <div className="portfolio border-b flex py-7">
                                <h1 className='w-1/3 text-xs text-gray-600 font-medium uppercase' >PORTFOLIO / <br /> WORK SAMPLES</h1>
                                <div className="details flex-1 space-y-3">
                                    {student.resume.workSamples.map((e, i) => {
                                        return <div key={e.id} className="dets relative">
                                            <h1 className='font-semibold'> <i className={`${e.WorkIcon} mr-1`} ></i> {e.WorkName}</h1>
                                            <a href={e.url} className='text-sm text-blue-600'>{e.url}</a>
                                            <div className="icons flex gap-3 absolute right-5 top-2">
                                                <i className="fa-solid fa-pen-to-square hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                                <i onClick={(elem)=>DeleteHandler(e.id,elem,'work')} className="fa-solid fa-trash hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                            </div>
                                        </div>
                                    })}
                                    <Link to='worksample' className='flex items-center gap-1 text-sm font-medium  text-blue-600 w-max '><i className="fa-solid fa-plus -mb-0.5"></i>Add <span className='lowercase'>PORTFOLIO/ WORK SAMPLES</span></Link>
                                </div>
                            </div>
                            <div className="accomplishment border-b flex py-7">
                                <h1 className='w-1/3 text-xs text-gray-600 font-medium uppercase' >ACCOMPLISHMENTS/ <br /> ADDITIONAL DETAILS</h1>
                                <div className="details flex-1 space-y-2">
                                    <ul className='list-disc ml-5 space-y-4'>
                                        {student.resume.accomplishment.map((e, i) => {
                                            return <div key={e.id} className='relative'>
                                                <li  className='-mt-1.5 font-medium text-gray-700' >{e.description}</li>
                                                <div className="icons flex gap-3 absolute right-5 top-2">
                                                    <i className="fa-solid fa-pen-to-square hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                                    <i onClick={(elem)=>DeleteHandler(e.id,elem,'accomp')} className="fa-solid fa-trash hover:text-gray-900 text-gray-600 cursor-pointer"></i>
                                                </div>
                                            </div>
                                        })}
                                    </ul>
                                    <Link to='accomplishment' className='flex items-center gap-1 text-sm font-medium  text-blue-600 w-max '><i className="fa-solid fa-plus -mb-0.5"></i>Add <span className='lowercase'>ACCOMPLISHMENTS/ ADDITIONAL DETAILS</span></Link>
                                </div>
                            </div>
                        </div>
                    </div> : <div className="loading w-3/5 mx-auto mt-7 rounded-lg h-96 bg-gray-200 animate-pulse"></div>

                }
                <Outlet />
            </div>
        </>
    )
}

export default Resume