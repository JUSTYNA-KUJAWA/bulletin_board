import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.root}>
      <h1>Welcome to the Bulletin Board</h1>
      <h2>waiting for your posts !!!</h2>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;