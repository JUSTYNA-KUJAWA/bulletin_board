import React from 'react';
import styles from './PostTitle.module.scss';
import SmallCard from '../../views/SmallCard/SmallCard';
import { Link } from 'react-router-dom';
import CommonButton from '../../views/CommonButton/CommonButton';
import { Grid } from '@material-ui/core/';
import { useSelector } from 'react-redux';
import { getAllPublished } from '../../../redux/postsRedux';


const PostTitle = () => {
  const posts = useSelector(state => getAllPublished(state));
  const postTitle = posts.slice(0, 4);

  return (
    <div className={styles.root}>
      <h2>The newest announce</h2>
      <Grid container spacing={3}>
        {postTitle.map(post => (
          <Grid item xs={12} sm={4} key={post._id}>
            <SmallCard
              id={post._id}
              title={post.title}
              image={post.image}
            />
          </Grid>
        ))}
      </Grid>
      <Link to={`/allposts`} className={styles.link}><CommonButton>View all</CommonButton></Link>
    </div>
  );
};

export default PostTitle;
