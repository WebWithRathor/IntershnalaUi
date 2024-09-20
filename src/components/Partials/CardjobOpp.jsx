import React from 'react'
import { Link } from 'react-router-dom';
import { dataChanger } from '../../utils/date';

const CardjobOpp = ({details}) => {
    const date = dataChanger(details.createdAt);
    console.log(details);
    

    return (
      <Link 
        to={'showDetails'} 
        state={details} 
        className="w-[40%] mx-auto bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
      >
        {/* Left section with details */}
        <div>
          <h2 className="text-lg font-semibold">{details.title}</h2>
          <p className="text-sm mt-1 text-gray-500">
            company name <span className="text-blue-500">Actively hiring</span>
          </p>
          
          <div className="flex space-x-6 mt-3 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <i className="fas fa-home"></i> {/* Icon */}
              <span>{details.jobtype}</span>
            </div>
     
            <div className="flex items-center space-x-2">
              <i className="fas fa-dollar-sign"></i> {/* Icon */}
              <span>{details.salary}</span> {/* Updated to show salary */}
            </div>
          </div>
  
          <div className="flex items-center space-x-4 mt-5 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <span className="bg-green-100 text-green-600 px-2 py-1 rounded-md">{date}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  };

export default CardjobOpp