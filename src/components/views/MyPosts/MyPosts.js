import React from 'react';
import { useSelector } from 'react-redux';
import { getMyPosts } from '../../redux/postsRedux';
import { getLoggedUser } from '../../redux/usersRedux';
import PostsView from '../PostsView/PostsView';
import Container from '@material-ui/core/Container';
import styles from './MyPosts.module.scss';

const MyPosts = () => {
  const loggedInUser = useSelector(state => getLoggedUser(state));
  const posts = useSelector(state => getMyPosts(state, loggedInUser.email));

  return (
    <Container className={styles.root}>
      <PostsView posts={posts}/>
    </Container>
  );
};

export default MyPosts;