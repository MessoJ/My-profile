import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Francis Meso
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-link" onClick={() => setIsOpen(false)}>
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className="nav-link" onClick={() => setIsOpen(false)}>
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-link" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;