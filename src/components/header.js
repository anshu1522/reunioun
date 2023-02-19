import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">     
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex justify-content-between" id="navbarSupportedContent">
        <div className='d-flex '>
        <h2 className='mr-1'>Estatery</h2>
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Rent</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Buy</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sell</a>
        </li>
      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Manage Property
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
          
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
          
        </li>
         </ul>
        </div>
        <div>
           <button type="button" className="btn btn-outline-primary">Login</button>
           <button type="button" className="btn btn-primary ml-1">Signup</button>
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header