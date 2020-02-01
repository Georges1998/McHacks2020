import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
      <h1>FeedMe</h1>
    <div className='options'>
      <Link className='option' to='/shelters'>
        SHELTERS
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;