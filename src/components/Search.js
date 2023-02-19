import React from 'react'

const Search = () => {
  return (
    <div className='container d-flex justify-content-between  mt-5'>
        <h1>
            Search properties to rent
        </h1>
        <div className="nav-item dropdown border ">
          <a className="nav-link dropdown-toggle mt-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Search With Search Bar
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
          
        </div>
    </div>
  )
}

export default Search