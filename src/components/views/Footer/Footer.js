import React from 'react';
import styles from './Footer.module.scss';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className={styles.root}>
      <p>©Copyright 2022 Bulletin Board App | All Rights Reserved</p>
      <div>
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
          </div>
  );
};

export default Footer;
