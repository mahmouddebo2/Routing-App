import React, { useState } from 'react'
import image1 from '../../imges/cabin.png'
import image2 from '../../imges/cake.png'
import image3 from '../../imges/circus.png'
import image4 from '../../imges/game.png'
import image5 from '../../imges/safe.png'
import image6 from '../../imges/submarine.png'
export default function Portfolio() {



  return (
    <>
    <div className="container w-75 py-5 mx-auto">
    <div className="portfolio text-center">
    <h2 className='pt-5 pb-2 text-center header-home '>PORTFOLIO</h2>
    <div className='bg-dark left'></div>
    <i className="fa-solid fa-star fs-3  position-relative"></i>
    <span className='bg-dark right'></span>
    </div>
    <div className="row gy-5 gx-5  py-5">


<div className="col-md-4 porto ">
        <div  className="item-layer position-relative">

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <div class="modal-body">
      <div className="port-modle text-center">
    <h2 className='pt-5 pb-2 text-center header-home '>TASTY CAKE</h2>
    <div className='bg-dark left'></div>
    <i className="fa-solid fa-star fs-3  position-relative"></i>
    <span className='bg-dark right'></span>
    </div>
    <img src={image1} alt="" className='w-100 rounded-3'  />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
    <button className='btn btn-sucsses'> Clase window</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Clase window</button>
      </div>
    </div>
  </div>
</div>


        <img src={image1} className='w-100 rounded-3' alt="" />
        <div className="layer-portfolio  bg-opacity-100 w-100 h-100 position-absolute top-0 opacity-0 d-flex justify-content-center flex-column">
          <div className="item d-flex justify-content-center align-items-center rounded-circle">
          <i className="fa-solid fa-plus  fw-bold "></i>
          </div>
          
        </div>
        </div>
      </div>
      <div className="col-md-4 porto ">
        <div className="item-layer position-relative">
        <img src={image2} className='w-100 rounded-3' alt="" />
        <div className="layer-portfolio  bg-opacity-100 w-100 h-100 position-absolute top-0 opacity-0 d-flex justify-content-center flex-column">
          <div className="item d-flex justify-content-center align-items-center rounded-circle">
          <i className="fa-solid fa-plus  fw-bold "></i>
          </div>
          
        </div>
        </div>
      </div>
      <div className="col-md-4 porto ">
        <div className="item-layer position-relative">
        <img src={image3} className='w-100 rounded-3' alt="" />
        <div className="layer-portfolio  bg-opacity-100 w-100 h-100 position-absolute top-0 opacity-0 d-flex justify-content-center flex-column">
          <div className="item d-flex justify-content-center align-items-center rounded-circle">
          <i className="fa-solid fa-plus  fw-bold "></i>
          </div>
          
        </div>
        </div>
      </div>
      <div className="col-md-4 porto ">
        <div className="item-layer position-relative">
        <img src={image4} className='w-100 rounded-3' alt="" />
        <div className="layer-portfolio  bg-opacity-100 w-100 h-100 position-absolute top-0 opacity-0 d-flex justify-content-center flex-column">
          <div className="item d-flex justify-content-center align-items-center rounded-circle">
          <i className="fa-solid fa-plus  fw-bold "></i>
          </div>
          
        </div>
        </div>
      </div>
      <div className="col-md-4 porto ">
        <div className="item-layer position-relative">
        <img src={image5} className='w-100 rounded-3' alt="" />
        <div className="layer-portfolio  bg-opacity-100 w-100 h-100 position-absolute top-0 opacity-0 d-flex justify-content-center flex-column">
          <div className="item d-flex justify-content-center align-items-center rounded-circle">
          <i className="fa-solid fa-plus  fw-bold "></i>
          </div>
          
        </div>
        </div>
      </div>
      <div className="col-md-4 porto ">
        <div className="item-layer position-relative">
        <img src={image6} className='w-100 rounded-3' alt="" />
        <div className="layer-portfolio  bg-opacity-100 w-100 h-100 position-absolute top-0 opacity-0 d-flex justify-content-center flex-column">
          <div className="item d-flex justify-content-center align-items-center rounded-circle">
          <i className="fa-solid fa-plus  fw-bold "></i>
          </div>
          
        </div>
        </div>
      </div>
    </div>
    </div>

    
    </>
  )
}
