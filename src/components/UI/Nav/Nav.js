import React, { useState, useEffect } from 'react';
import Link from '../Link/Link';
import logo from '../../../assets/img/logo.jpg';
import hamburgerIcon from '../../../assets/img/hamburger-icon.jpg'; // Adjust the path as needed

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggledNav, setToggledNav] = useState(false);

  const toggleNav = () => {
    setToggledNav(!toggledNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavClass(window.scrollY >= 200 ? 'scrolled' : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-md ${navClass}`}>
      <div className='container'>
        <div className='logo'>
          <img src={logo} alt='about company' className='logoImage' />
        </div>
        <button
          className={`navbar-toggler ${toggledNav ? 'open' : ''}`}
          type='button'
          onClick={toggleNav}
          aria-controls='navbarNav'
          aria-expanded={toggledNav ? "true" : "false"}
          aria-label='Toggle navigation'
        >
          <img src={hamburgerIcon} alt="Menu" className="hamburger-icon" /> 
        </button>

        <div className={`collapse navbar-collapse ${toggledNav ? 'show' : ''}`} id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link target='home'  classes='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='about' classes='nav-link'>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='services' classes='nav-link'>
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='blog' classes='nav-link'>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='contact' classes='nav-link'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;