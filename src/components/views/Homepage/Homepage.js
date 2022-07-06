import React, {useEffect} from 'react';
import ListTitlesPosts from '../ListTitlesPosts/ListTitlesPosts';
import Welcome from '../../layout/Welcome/Welcome';
import styles from './Homepage.module.scss';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div className={styles.root}>
      <Welcome/>
      <ListTitlesPosts />
    </div>
  );
};

export default Homepage;