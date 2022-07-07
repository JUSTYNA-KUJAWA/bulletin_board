import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './TopBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoginSelect from '../../features/LoginSelect/LoginSelect';
import {IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const TopBar = ({className, userStatus}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <LoginSelect />
      {!userStatus && (
             <IconButton
               aria-label='account of current user'
               aria-controls='menu-appbar'
               aria-haspopup='true'
               color='inherit'
               href='https://google.com'
             >
               <AccountCircle style={{ fontSize: 45 }} /> 
               <p>Login</p>
             </IconButton>
             )}  
        <div className={styles.iconBox}>
          <a href="https://facebook.com">
            <FontAwesomeIcon className={styles.icon} icon={faFacebook}></FontAwesomeIcon>
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon className={styles.icon} icon={faInstagram}></FontAwesomeIcon>
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon className={styles.icon} icon={faTwitter}></FontAwesomeIcon>
          </a>
        </div>
      </div>    
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  userStatus:PropTypes.string,
};

export default TopBar;