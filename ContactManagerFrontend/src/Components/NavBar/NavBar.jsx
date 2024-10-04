import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        <div className='container-fluid bg-dark h5 p-1'style={{fontFamily:'serif'}}>
            <Link to={'/'} className='navbar-brand text-light line-height-base'><i className='fa fa-mobile text-warning'></i> Contact <span class='text-warning h4' > Manager</span></Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar
