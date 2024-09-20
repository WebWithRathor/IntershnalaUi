import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import CardOpp from './Partials/CardOpp';
import { Instance } from '../utils/Axios';


const Myinternship = () => {
      const [Internships, setInternships] = useState([]);
      const getInternships = async () => {
        const { data } = await Instance.post('/employe/internship/read');
        setInternships(data);
      }
      useEffect(() => {
        getInternships();
      }, [])
    
      return (
        <>
          
          <div className='h-screen w-full pb-20 flex flex-col overflow-y-auto gap-4 bg-blue-50 pt-28'>
            {Internships.length != 0 ?
              Internships.map((intern,i) => {
                return <CardOpp Noapply={true} key={i} details = {intern} />
              }) :
              <h1 className='text-2xl text-center font-semibold mt-32'>Sorry No Internships 😅</h1>
            }
            <Outlet/>
          </div>
        </>
      )
    }
    

export default Myinternship