import React, { useState } from 'react'
import img1 from "../../assets/images/port1.png" 
import img2 from "../../assets/images/port2.png" 
import img3 from "../../assets/images/port3.png" 

export default function Portfolio() {
  let [data , setData] = useState(
    [
      {img: img1 , id : "img1"},
      {img: img2 , id : "img2"},
      {img: img3 , id : "img3"},
      {img: img1 , id : "img4"},
      {img: img2 , id : "img5"},
      {img: img3 , id : "img6"}
    ]
  )
  return <>
  <div className="container my-5 portfolio">
    <h2 className='text-center porto fw-bolder fs-1'>PORTFOLIO COMPONENT</h2>
    <div className="star star2 w-25 mx-auto position-relative text-center my-3"><i class="fa-solid fa-star"></i></div>
    <div className="row g-4">
      {data.map( (item) => <>
        <div className="col-md-4">
          <div className="portfolio-item">
            <img src={item.img} alt="" className='w-100 rounded-3' />
            <div className="plus rounded-3" data-bs-toggle="modal" data-bs-target={"#" + item.id}>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </> )}
      {data.map( (item) => <>
        <div className="modal fade" id={item.id} data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-body p-0 rounded-3">
          <img src={item.img} alt="" className='w-100 rounded-3' />
        </div>
      </div>
    </div>
  </div>
      </> )}
    </div>
  </div>
  </>
}
