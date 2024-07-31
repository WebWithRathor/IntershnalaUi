import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-white w-full px-32 py-28 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-4">Why Hire from Internshala?</h2>
      <p className="text-gray-600 mb-8">Post your intern requirements and build your dream team with ease.</p>
      <div className="shadow-lg pt-10 border ">
      <div className="grid grid-cols-1 mb-4  sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="px-20 border-r">
          <p className="text-4xl font-bold mb-2 text-sky-600">25 Mn+</p>
          <p className="text-gray-600 text-lg">candidates looking for Internships</p>
        </div>
        <div className="px-20 border-r">
          <p className="text-4xl text-nowrap font-bold mb-2 text-sky-600">1.7 Mn+</p>
          <p className="text-gray-600 text-lg">candidates hired PAN India</p>
        </div>
        <div className="px-20 border-r">
          <p className="text-4xl font-bold mb-2 text-sky-600">200+</p>
          <p className="text-gray-600 text-lg">Job Profiles</p>
        </div>
        <div className="px-20">
          <p className="text-4xl font-bold mb-2 text-sky-600">250 K+</p>
          <p className="text-gray-600 text-lg">Companies Hiring on Internshala</p>
        </div>
      </div>
      <div className="mt-8 py-3 w-full bg-zinc-100 flex items-center justify-center">
        <div className="flex items-center">
          <div className="text-yellow-500 text-2xl">★★★★☆</div>
          <p className="ml-2 text-xl font-bold text-gray-700">4.6</p>
          <p className="ml-2 text-gray-600">(2,061)</p>
        </div>
      </div>
      </div>

    </div>
  );
}

export default StatsSection;