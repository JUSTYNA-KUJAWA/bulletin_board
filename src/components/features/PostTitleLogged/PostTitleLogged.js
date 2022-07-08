import React from 'react';
import styles from './PostTitleLogged.module.scss';
import SmallCardTitleLogged  from '../../views/SmallCardTitleLogged/SmallCardTitleLogged';
import { Grid } from '@material-ui/core/';
import { useSelector } from 'react-redux';
import { getAllPublished } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';
import CommonButton from '../../views/CommonButton/CommonButton';
import Container from '@material-ui/core/Container';

const PostTitleLogged = () => {
  const posts = useSelector(state => getAllPublished(state));
  const postTitle = posts.slice(0, 2);
console.log(postTitle);
  return (
    <Container className={styles.root}>
    <Link to={'/post/add'} className={styles.link}><CommonButton>Add Post</CommonButton></Link> 
    <Link to={`/allmyposts`} className={styles.link}><CommonButton>View all</CommonButton></Link> 
    <Link to={`/myposts`} className={styles.link}><CommonButton>Back to account</CommonButton></Link>
    <div className={styles.text}>
      <h2>The newest announces !</h2>
    <Grid container spacing={3}>
        {postTitle.map(post => (
          <Grid item xs={12} sm={4} key={post._id}>
            <SmallCardTitleLogged 
              id={post._id}
              title={post.title}
              image={post.image}
            />
          </Grid>
        ))}
      </Grid>
    </div>
    </Container>
  );
};

export default PostTitleLogged;