import React, {useEffect} from 'react';
import ListTitlesPosts from '../ListTitlesPosts/ListTitlesPosts';
import styles from './Homepage.module.scss';

const Homepage = () => {
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div className={styles.root}>
      <ListTitlesPosts />
    </div>
  );
};

export default Homepage;