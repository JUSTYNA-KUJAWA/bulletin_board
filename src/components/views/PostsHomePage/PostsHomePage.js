import React from 'react';
import { useSelector } from 'react-redux';
import PostsView from '../../features/PostView/PostView';
import Logo from '../../features/Logo/Logo';
import { getAllPublished } from '../../../redux/postsRedux';
import styles from './PostsHomePage.module.scss';

const PostsHomePage = () => {
  const posts = useSelector(state => getAllPublished(state));
  return (
    <div className={styles.root}>
      <Logo></Logo>
      <PostsView posts={posts}/>
    </div>
  );
};

export default PostsHomePage;