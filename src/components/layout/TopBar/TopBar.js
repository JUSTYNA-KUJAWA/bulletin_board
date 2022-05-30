import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './TopBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoginSelect from '../../features/LoginSelect/LoginSelect';

const TopBar = ({className}) => {

  return (
    <div className={clsx(className, styles.root)}>
      <LoginSelect/>
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
};



export default TopBar;