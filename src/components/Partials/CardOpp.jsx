import React from 'react'
import { dataChanger } from '../../utils/date';
import { Link } from 'react-router-dom';

const CardOpp = ({details,Noapply}) => {
  
const date =  dataChanger(details.createdAt);

  

  return (
    <Link to={Noapply ? '' : 'showDetails'} state={{details}} className="w-[40%] mx-auto bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
      {/* Left section with details */}
      <div>
        <h2 className="text-lg font-semibold">{details.profile}</h2>
        <p className="text-sm mt-1 text-gray-500">Hamari Pahchan NGO <span className="text-blue-500">Actively hiring</span></p>
        
        <div className="flex space-x-6 mt-3 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <i className="fas fa-home"></i> {/* Icon */}
            <span>{details.internshiptype}</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-calendar-alt"></i> {/* Icon */}
            <span>{details.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-dollar-sign"></i> {/* Icon */}
            <span>{details.stipend.amount} ( {details.stipend.status} )</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-5 text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">{date}</span>
            <h1 className='font-semibold'>Candidates : {details.student.length}</h1>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardOpp