import React from 'react';
import { useSelector } from 'react-redux';
import { getMyPosts } from '../../../redux/postsRedux';
import { getLoggedUser } from '../../../redux/usersRedux';
import PostViewMyPosts from '../../features/PostViewMyPosts/PostViewMyPosts';
import CommonButton from '../CommonButton/CommonButton';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import styles from './MyPosts.module.scss';

const MyPosts = () => {
  const loggedInUser = useSelector(state => getLoggedUser(state));
  const posts = useSelector(state => getMyPosts(state, loggedInUser.mail));
  console.log(posts);
  
  return (
    <Container className={styles.root}>
      <div className='text'>
        <h3>Welcome {loggedInUser.name}!!</h3>
      </div>
      <div className={styles.addButton}>
      <Link to={`/myposts`} className={styles.link}><CommonButton>My posts</CommonButton></Link>
      <Link to={`/allmyposts`} className={styles.link}><CommonButton>All posts</CommonButton></Link>
      </div>
      <PostViewMyPosts posts={posts}/>
    </Container>
  );
};

export default MyPosts;