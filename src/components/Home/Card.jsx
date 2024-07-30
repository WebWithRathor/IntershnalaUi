import React from 'react'

const Card = () => {
  return (
    <div className="rounded-xl h-full w-1/4 p-5 border bg-white">
    <h4 className='px-2 font-medium text-sm py-1 rounded border w-fit'>📈Actively Hiring</h4>
    <div className="title flex justify-between mt-5 items-center ">
      <h1 className='font-semibold leading-none'>Fund Raising <br /> <span className='text-zinc-400 mt-1 inline-block text-[13px]'>Marpu Foundation</span></h1>
      <img className="h-12 aspect-square bg-red-200 rounded" alt="" />
    </div>
    <hr className='my-4 ' />
    <h1 className='text-sm font-semibold text-zinc-700'> Work from home</h1>
    <h1 className='text-sm font-semibold text-zinc-700 my-1'>Unpaid</h1>
    <h1 className='text-sm font-semibold text-zinc-700'>2 Weeks</h1>

    <div className="apply mt-10 flex justify-between">
      <p className='py-1 px-2 text-sm bg-zinc-400 text-zinc-100 font-semibold rounded'>internship</p>
      <h1 className='text-blue-500 font-semibold'>View Details</h1>
    </div>
  </div>
  )
}

export default Card