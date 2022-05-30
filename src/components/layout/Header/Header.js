
import React from 'react';
import { Link  } from 'react-router-dom';
import CommonButton from '../../views/CommonButton/CommonButton';
import LoginUser from '../../features/LoginUser/LoginUser';
import LogoutUser from '../../features/LogoutUser/LogoutUser';
import NavBar from '../NavBar/NavBar';
import styles from './Header.module.scss';


const Header = () => {

  return (
    <div className={styles.root}>
      <NavBar/>
      <div className={styles.navlinks}>
        <Link to={`/allposts`} className={styles.link}><CommonButton>All posts</CommonButton></Link>
        <Link to={`/userloggedposts`} className={styles.link}><CommonButton>User posts</CommonButton></Link>
        </div>
        <LoginUser/>
        <LogoutUser/>
      </div>
  
  );
};

export default Header;