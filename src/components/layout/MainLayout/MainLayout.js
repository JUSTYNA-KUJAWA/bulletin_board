import React from 'react';

import Header from '../Header/Header';
import Footer from '../../views/Footer/Footer';
import TopBar from '../TopBar/TopBar';

import styles from './MainLayout.module.scss';

import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      <TopBar />
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};


MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;