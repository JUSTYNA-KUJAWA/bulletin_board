import React from 'react';
import { teal } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import {IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <IconButton
      edge='start'
      className={styles.root}
      color='inherit'
      aria-label='menu'
      component={Link}
      to={'/'}
    >
    <HomeIcon style={{ color: teal[800] , fontSize: 45 }} />
    </IconButton> 
      <h2>404 no found .....</h2>
    </div>
  );
};

export default NotFound;
