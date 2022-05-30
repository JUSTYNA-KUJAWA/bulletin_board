import React from 'react';

import styles from './Welcome.module.scss';
import CommonButton from '../../views/CommonButton/CommonButton';
import Logo from '../../features/Logo/Logo';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
    <Logo></Logo>
      <Link to={`/postadd`} className={styles.link}><CommonButton>add Annonce</CommonButton></Link>
    </div>
  );
};

export default Welcome;