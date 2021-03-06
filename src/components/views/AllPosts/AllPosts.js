import React from 'react';
import { useSelector } from 'react-redux';
import PostsView from '../../features/PostView/PostView';
import CommonButton from '../CommonButton/CommonButton';
import { Link } from 'react-router-dom';
import { getAllPublished } from '../../../redux/postsRedux';
import Container from '@material-ui/core/Container';
import styles from './AllPosts.module.scss';

const AllPosts = () => {
  const posts = useSelector(state => getAllPublished(state));
  return (
    <Container className={styles.root}>
      <Link to={`/myposts`} className={styles.link}><CommonButton>My posts</CommonButton></Link>
      <Link to={`/allposts`} className={styles.link}><CommonButton>All posts</CommonButton></Link>
      <PostsView posts={posts}/>
    </Container>
  );
};

export default AllPosts;