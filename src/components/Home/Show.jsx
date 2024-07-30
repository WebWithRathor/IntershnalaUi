import React from 'react'
import Card from './Card'

const Show = ({type}) => {
  return (
    <div className={`bg-zinc-200  ${type === 'Job' ? 'pb-24' :'pb-14' } px-10 pt-10`}>
      <h1 className='text-4xl font-semibold text-center'>Latest {type}'s on internshala</h1>
      <div className="categories flex items-center gap-4 px-20 mt-10">
        <h1 className='font-semibold'>POPULAR CATEGORIES :</h1>
        <p className='px-3 py-1 border border-black rounded-full'>Big brands</p>
        <p className='px-3 py-1 border border-black rounded-full'>Big brands</p>
        <p className='px-3 py-1 border border-black rounded-full'>Big brands</p>
        <p className='px-3 py-1 border border-black rounded-full'>Big brands</p>
        <p className='px-3 py-1 border border-black rounded-full'>Big brands</p>
        <p className='px-3 py-1 border border-black rounded-full'>Big brands</p>
      </div>
      <div className="flex px-20 gap-5 mt-10">
        <Card />
      </div>
      <div className="navigation mt-16 flex items-center gap-10 justify-center">
        <p className='w-12 bg-red-400 rounded-full items-center justify-center flex aspect-square'> - </p>
        <div className="line w-32 h-1 rounded-full bg-red-300"><div className="fill w-1/2 bg-blue-500 h-full"></div></div>
        <p className='w-12 bg-red-400 rounded-full items-center justify-center flex aspect-square'> - </p>
      </div>
    </div>
  )
}

export default Show