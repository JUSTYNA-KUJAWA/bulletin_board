import React from 'react';
import { useSelector } from 'react-redux';
import PostViewMyPosts from '../../features/PostViewMyPosts/PostViewMyPosts';
import CommonButton from '../CommonButton/CommonButton';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../redux/usersRedux';
import { getAllPublished } from '../../../redux/postsRedux';
import Container from '@material-ui/core/Container';
import HomeIcon from '@material-ui/icons/Home';
import {IconButton } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import styles from './AllMyPosts.module.scss';

const AllMyPosts = () => {
  const posts = useSelector(state => getAllPublished(state));
  const loggedInUser = useSelector(state => getLoggedUser(state));
  return (
    <Container className={styles.root}>
      <Link to={'/post/add'} className={styles.link}><CommonButton>Add Post</CommonButton></Link>
      <IconButton
      edge='start'
      className={styles.link1}
      color='inherit'
      aria-label='menu'
      component={Link}
      to={'/homepagelogged'}
    >
    <HomeIcon style={{ color: teal[800] , fontSize: 45 }} />
    </IconButton>
      <h3>Welcome {loggedInUser.name}!!</h3>
      <Link to={`/myposts`} className={styles.link}><CommonButton>My posts</CommonButton></Link>
      <Link to={`/allmyposts`} className={styles.link}><CommonButton>All posts</CommonButton></Link>
      <div className='text'>
      </div>
      <PostViewMyPosts posts={posts}/>
    </Container>
  );
};

export default AllMyPosts;