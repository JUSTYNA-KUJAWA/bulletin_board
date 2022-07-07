import React from 'react';
import { useSelector } from 'react-redux';
import PostView from '../../features/PostView/PostView';
import CommonButton from '../CommonButton/CommonButton';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../redux/usersRedux';
import { getAllPublished } from '../../../redux/postsRedux';
import Container from '@material-ui/core/Container';
import styles from './AllMyPosts.module.scss';

const AllMyPosts = () => {
  const posts = useSelector(state => getAllPublished(state));
  const loggedInUser = useSelector(state => getLoggedUser(state));
  return (
    <Container className={styles.root}>
      <h3>Welcome {loggedInUser.name}!!</h3>
      <Link to={`/myposts`} className={styles.link}><CommonButton>My posts</CommonButton></Link>
      <Link to={`/allmyposts`} className={styles.link}><CommonButton>All posts</CommonButton></Link>
      <div className='text'>
      </div>
      <PostView posts={posts}/>
    </Container>
  );
};

export default AllMyPosts;