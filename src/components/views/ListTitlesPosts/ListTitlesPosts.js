import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import PostTitle from '../../features/PostTitle/PostTitle';
import styles from './ListTitlesPosts.module.scss';

const ListTitlesPosts = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div className={styles.root}>
      <PostTitle/>
    </div>
  );
};
ListTitlesPosts.propTypes = {
  className: PropTypes.string,
};

export default ListTitlesPosts;