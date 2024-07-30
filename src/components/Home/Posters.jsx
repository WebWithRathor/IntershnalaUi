import React from 'react'

const Posters = () => {
  return (
    <div className="posters w-full flex justify-center gap-6 h-[37vh] px-32 mt-8 mb-20">
    <div className="poster w-1/3 bg-blue-400 rounded-3xl overflow-hidden">
    <img src="https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png" className='h-full w-full object-cover' alt="" />
    </div>
    <div className="poster w-1/3 bg-blue-400 rounded-3xl overflow-hidden">
    <img src="https://internshala-uploads.internshala.com/banner-images/home_new/employers_choice_launch_july24-student.png.webp" className='h-full w-full object-cover' alt="" />
    </div>
    <div className="poster w-1/3 bg-blue-400 rounded-3xl overflow-hidden">
    <img src="https://internshala-uploads.internshala.com/banner-images/home_new/mahindra_logistics-student.png.webp" className='h-full w-full object-cover' alt="" />
    </div>
  </div>
  )
}

export default Posters