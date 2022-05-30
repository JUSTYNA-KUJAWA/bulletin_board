import React from 'react';
import styles from './NavBar.module.scss';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { orange } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';


const NavBar = () => (

    <div className={styles.root}>
      <IconButton
            edge='start'
            className={styles.root}
            color='inherit'
            aria-label='menu'
            component={Link}
            to={'/'}
          >
            <HomeIcon style={{ color: orange[500] }} />
            <h4>Bulletin Board- Locations holidays</h4>
          </IconButton>
         
    </div>
);


export default NavBar;