import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './TopBar.module.scss';
import LoginSelect from '../../features/LoginSelect/LoginSelect';

const TopBar = ({className}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <LoginSelect />
    </div>    
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;