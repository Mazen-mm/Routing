import React from 'react'

export default function Footer() {
  return<>
  <footer className='foot text-center pt-5'>
    <div className="container py-5">
      <div className="row text-white">
        <div className="col-md-4">
          <h4>LOCATION</h4>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
          <h4>AROUND THE WEB</h4>
          <div className="icons">
            <ul className='d-flex justify-content-center p-0 align-items-center'>
              <li><i className="fa-brands fa-facebook"></i></li>
              <li><i className="fa-brands fa-twitter"></i></li>
              <li><i className="fa-brands fa-linkedin-in"></i></li>
              <li><i className="fa-solid fa-globe"></i></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <h4>ABOUT FREELANCER</h4>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
    <div className="copy text-center bg-dark text-white py-4"><p>Copyright © Your Website 2021</p></div>
  </footer>
  </>
}
