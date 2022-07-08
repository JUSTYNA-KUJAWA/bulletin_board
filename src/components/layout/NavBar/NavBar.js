import React from 'react';
import styles from './NavBar.module.scss';
import Logo from '../../features/Logo/Logo';

const NavBar = () => (
  <div className={styles.root}>
     <h3>Bulletin Board- Locations holidays</h3>
     <Logo></Logo>
     </div>
);

export default NavBar;