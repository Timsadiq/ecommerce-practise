import React from 'react'
import LOGO from '../../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs"
import { useCart } from '../Context/Cartcontext'

const Navbar = () => {

  const { totalitems } = useCart()

  return (
    <div className='down'>
      <nav className="navbar  fixed-top">
        <div className="container-fluid">
      
          <Link to='/'>
            <img src={LOGO} alt="logo" />
          </Link>
         <span className='nav-item'>
            <Link to='/cart'>
              <BsCart4 className='cart' />
              <sup> <span className='cartnumber'>{totalitems()}</span></sup>
            </Link>
            </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Our Flower Shop</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                <li className="nav-item">
                  <Link to='/about'>About</Link>
                </li>
                <li className="nav-item">
                  <Link to='/contact'>Contact</Link>
                </li>
                <li className="nav-item">
                  <Link to='/service'>Service</Link>
                </li>
                <li className="nav-item">
                  <Link to='/signup'>Signup</Link>
                </li>



              </ul>
              <form className="d-flex mt-3" role="search" onSubmit={(e) => {
                e.preventDefault()
                const value = e.target.elements.category.value

                if (value) {
                  window.location.href = `search?category=${value}`
                }
              }}>
                <input className="form-control me-2" type="search" placeholder="Search category" aria-label="Search" name='category' />
                <button className="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar