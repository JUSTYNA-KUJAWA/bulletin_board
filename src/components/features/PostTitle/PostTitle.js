import React from 'react';
import styles from './PostTitle.module.scss';
import SmallCardTitle  from '../../views/SmallCardTitle/SmallCardTitle';
import { Grid } from '@material-ui/core/';
import { useSelector } from 'react-redux';
import { getAllPublished } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';
import CommonButton from '../../views/CommonButton/CommonButton';

const PostTitle = () => {
  const posts = useSelector(state => getAllPublished(state));
  const postTitle = posts.slice(0, 2);
console.log(postTitle);
  return (
    <div className={styles.root}>
    <Link to={'/post/add/guest'} className={styles.link}><CommonButton>Add Post</CommonButton></Link> 
    <Link to={`/posts`} className={styles.link}><CommonButton>View all</CommonButton></Link>  
      <h2>The newest announces !</h2>
      <Grid container spacing={3}>
        {postTitle.map(post => (
          <Grid item xs={12} sm={4} key={post._id}>
            <SmallCardTitle 
              id={post._id}
              title={post.title}
              image={post.image}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PostTitle;
