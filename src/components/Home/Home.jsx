import React from 'react'
import Posters from './Posters'
import Show from './Show'
import TopCompanies from './TopCompanies'
import { Outlet } from 'react-router-dom'
import Nav from '../Partials/Nav'

const HomeLayout = () => {



  return (
    <div className='h-full pt-32 w-full'>
      <Nav />

      <div className="">
        <h1 className='text-[3vw] text-zinc-700 font-bold text-center mt-10'>Make your dream career a reality</h1>
        <img className='h-14 mx-auto w-[35vw] pl-40 object-[-27px_1px]' src="https://internshala.com/static/images/home/sprites/underline_fire.png" alt="" />
      </div>
        <h1 className='text-center text-zinc-700 font-bold text-3xl'>Trending on Intershala 🔥</h1> :

      <Posters />
      <Show type='Intership' />
      <Show type='Job' />
      <TopCompanies />
      <Outlet/>
    </div>
  )
}

export default HomeLayout