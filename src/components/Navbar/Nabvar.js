import React from 'react';
import './Navbar.scss';
import logo from '../../logo.png';

export default function Nabvar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt='travel logo' />
    </nav>
  );
}
