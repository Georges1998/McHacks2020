import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <h1>FeedUs</h1>
    <div className='options'>

      <Link className='option' to='/shelters'>
        SHELTERS
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  });
  
  export default connect(mapStateToProps)(Header);