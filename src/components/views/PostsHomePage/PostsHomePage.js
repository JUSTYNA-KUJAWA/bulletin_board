import React from 'react';
import { useSelector } from 'react-redux';
import PostsView from '../../features/PostView/PostView';
import { getAllPublished } from '../../../redux/postsRedux';
import Container from '@material-ui/core/Container';
import styles from './PostsHomePage.module.scss';
import CommonButton from '../CommonButton/CommonButton';
import { teal } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import {IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

const PostsHomePage = () => {
  const posts = useSelector(state => getAllPublished(state));
  return (
    
    <Container className={styles.root}>
      <Link to={'/post/add/guest'} className={styles.link}><CommonButton>Add Post</CommonButton></Link>
      <IconButton
      edge='start'
      className={styles.link1}
      color='inherit'
      aria-label='menu'
      component={Link}
      to={'/'}
    >
    <HomeIcon style={{ color: teal[800] , fontSize: 45}} />
    </IconButton> 
      <PostsView posts={posts}/>
    </Container>
  );
};

export default PostsHomePage;