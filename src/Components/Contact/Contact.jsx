import React from 'react'

export default function Contact() {
  return <>
  <div className="container text-center my-5 contact">
    <h2 className='text-center fw-bolder fs-1'>CONATCT SECTION</h2>
    <div className="star star2 w-25 mx-auto position-relative text-center my-3"><i class="fa-solid fa-star"></i>
  </div>
    <div className="form w-50 mx-auto my-5">
      <input className="form-control my-5 form-control-lg" type="text" placeholder="userName"/>
      <input className="form-control my-5 form-control-lg" type="text" placeholder="userAge"/>
      <input className="form-control my-5 form-control-lg" type="text" placeholder="userEmail"/>
      <input className="form-control my-5 form-control-lg" type="text" placeholder="userPassword"/>
      <button type="button" className="btn ms-auto green text-white">Send Message</button>
    </div>
  </div>
  </>
}
