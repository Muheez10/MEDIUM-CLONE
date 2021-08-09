import React from 'react'
import whatsapp2 from '../whatsapp2.jpg'

const Topbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light something fixed-top">
        <div className="container-fluid">
        <img className='whatsapp2'src={whatsapp2} alt='Logo...'></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current='page' href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i class="fas fa-ellipsis-v"></i></a>
              </li>
              <li className='nav-item'>
              <i className= "nav-link fal fa-ellipsis-v show"></i>
               </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Topbar
