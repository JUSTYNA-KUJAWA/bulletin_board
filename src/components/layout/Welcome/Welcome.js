import React from 'react';
import Logo from '../../features/Logo/Logo';
import CommonButton from '../../views/CommonButton/CommonButton';
import { Link } from 'react-router-dom';
import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.root}>
    <Logo></Logo>
    <Link to={`/post/add`} className={styles.link}><CommonButton>Add Post</CommonButton></Link>
    </div>
  );
};

export default Welcome;