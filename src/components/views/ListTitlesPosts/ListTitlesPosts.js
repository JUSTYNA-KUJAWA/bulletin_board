import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import PostTitle from '../../features/PostTitle/PostTitle';
import Container from '@material-ui/core/Container';
import styles from './ListTitlesPosts.module.scss';

const ListTitlesPosts = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <Container className={styles.root}>
      <PostTitle/>
    </Container>
  );
};
ListTitlesPosts.propTypes = {
  className: PropTypes.string,
};


export default ListTitlesPosts;