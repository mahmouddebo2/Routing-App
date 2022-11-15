import React from 'react'
import HomeLogo from '../../imges/home.png';

export default function Home() {
  return (
    <>
    
    <div className="home    d-flex w-100 h-100vh text-center justify-content-center align-items-center">
    <div className="layer-home ">
    <img src={HomeLogo} className='w-50  mb-4' alt="" />
    <h2 className=' fw-bold text-white header-home'>START REACT </h2>
    <div className='bg-white left'></div>
    <i class="fa-solid fa-star fs-3 text-white position-relative"></i>
    <span className='bg-white right'></span>
    <p className='text-white fs-4 mt-3 home-parg'>Graphic Artist - Web Designer - Illustrator</p>

    </div>

    </div>
    </>
  )
}
