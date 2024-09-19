import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import CardOpp from './CardOpp'
import { Instance } from '../../utils/Axios';
import { useDispatch } from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import { loadStudent } from '../../store/actions/studentAction';

const InternshipList = ({student}) => {

  const { pathname } = useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch();

    useEffect(() => {
        if (student === null && pathname != '/') {
          dispatch(loadStudent(navigate));
        }
      },[student])

      console.log(student);
      
  const [Internships, setInternships] = useState([]);

  const getInternships = async () => {
    const { data } = await Instance.post('/internship/read');
    setInternships(data);
  }

  useEffect(() => {
    getInternships();
  }, [])

  return (
    <>
      <Nav />
      <div className='h-screen w-full pb-20 flex flex-col overflow-y-auto gap-4 bg-blue-50 pt-28'>
        {Internships.length != 0 ?
          Internships.map((intern,i) => {
            return <CardOpp key={i} details = {intern} />
          }) :
          <h1 className='text-2xl text-center font-semibold mt-32'>Sorry No Internships 😅</h1>
        }
      </div>
    </>
  )
}

export default InternshipList