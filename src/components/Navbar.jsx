import React from 'react';
import trollface from '../assets/trollface.png'


const Navbar = () => {



    return (
        <nav className="navbar">
            <div className="n-logo-title">
            <img src={trollface} alt="" className="nav-logo" />
            <div className="nav-title">Meme Generator</div>
            </div>
           <p className='project'>React Course - Project 4</p>
      </nav>
    )


}

export default Navbar