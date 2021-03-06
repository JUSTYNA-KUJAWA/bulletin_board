import React from 'react';
import { useSelector } from 'react-redux';
import PostViewMyPosts from '../../features/PostViewMyPosts/PostViewMyPosts';
import CommonButton from '../CommonButton/CommonButton';
import Logo from '../../features/Logo/Logo';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../redux/usersRedux';
import { getAllPublished } from '../../../redux/postsRedux';
import Container from '@material-ui/core/Container';
import styles from './AllMyPosts.module.scss';

const AllMyPosts = () => {
  const posts = useSelector(state => getAllPublished(state));
  const loggedInUser = useSelector(state => getLoggedUser(state));
  return (
    <div className={styles.root}>
    <Logo></Logo>
    <Container>
      <h3>Welcome {loggedInUser.name}!!</h3>
      <Link to={`/myposts`} className={styles.link}><CommonButton>My posts</CommonButton></Link>
      <Link to={`/allmyposts`} className={styles.link}><CommonButton>All posts</CommonButton></Link>
      <Link to={'/post/add'} className={styles.link}><CommonButton>Add Post</CommonButton></Link>
      <div className='text'>
      </div>
      <PostViewMyPosts posts={posts}/>
    </Container>
    </div>
  );
};

export default AllMyPosts;