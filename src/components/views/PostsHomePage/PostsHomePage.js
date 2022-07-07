import React from 'react';
import { useSelector } from 'react-redux';
import PostsView from '../../features/PostView/PostView';
import CommonButton from '../CommonButton/CommonButton';
import { Link } from 'react-router-dom';
import { getAllPublished } from '../../../redux/postsRedux';
import Container from '@material-ui/core/Container';
import styles from './PostsHomePage.module.scss';

const PostsHomePage = () => {
  const posts = useSelector(state => getAllPublished(state));
  return (
    <Container className={styles.root}>
      <Link to={`/posts`} className={styles.link}><CommonButton>All posts</CommonButton></Link>
      <Link to={`/post/add`} className={styles.link}><CommonButton>Add Post</CommonButton></Link>
      <PostsView posts={posts}/>
    </Container>
  );
};

export default PostsHomePage;