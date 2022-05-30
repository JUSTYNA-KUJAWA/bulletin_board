
import React from 'react';
import { Link  } from 'react-router-dom';
import CommonButton from '../../views/CommonButton/CommonButton';
import NavBar from '../NavBar/NavBar';
import styles from './Header.module.scss';
import {IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


const Header = ({userStatus}) => {

  return (
    <div className={styles.root}>
      <NavBar/>
      <div className={styles.navlinks}>
        <Link to={`/allposts`} className={styles.link}><CommonButton>All posts</CommonButton></Link>
        <Link to={`/userloggedposts`} className={styles.link}><CommonButton>User posts</CommonButton></Link>
        {!userStatus && (
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                color='inherit'
                href='https://google.com'
              >
                <AccountCircle /> Login
              </IconButton>
              )}
        {!userStatus && (
          
          <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                color='inherit'
                component={Link}
                to={'/'}
              >
                <AccountCircle />
                Logout
              </IconButton>
            
         )}     
          
      </div>
      </div>
  
  );
};

export default Header;