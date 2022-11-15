import React from 'react'

export default function Contact() {
  return (
    <>
     <div className="contact text-center ">
    <h2 className='pt-5 pb-2 text-center header-home '>CONTACT ME</h2>
    <div className='bg-dark left'></div>
    <i className="fa-solid fa-star fs-3  position-relative"></i>
    <span className='bg-dark right'></span>
    </div>
    <div className="container w-50 mx-auto  py-5">
    <input type="text" className='form-control mt-5 py-4' placeholder='Name ' />
    <input type="email" className='form-control mt-5 py-4'  placeholder='Email Address'/>
    <input type="number" className='form-control mt-5 py-4' placeholder='Phone Number'/>
    <input type="text" className='form-control mt-5 py-3 h-'   placeholder='Message'/>
    <button type="button" class="btn send btn-success mt-4 px-4 py-3 fs-4">Send</button>
    </div>
    </>
  )
}
