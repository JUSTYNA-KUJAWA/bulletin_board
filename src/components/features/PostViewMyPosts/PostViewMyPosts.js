import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core/';
import SmallCardMyPosts from '../../views/SmallCardMyPosts/SmallCardMyPosts';
import styles from './PostViewMyPosts.module.scss';

const PostsViewMyPosts = ({ posts }) => {
  return (
    <div className={styles.root}>
      <Grid container spacing={3}>
        {posts.map(post => (
          <Grid item xs={12} sm={4} key={post._id}>
            <SmallCardMyPosts
              id={post._id}
              title={post.title}
              text={post.text}
              created={post.created}
              updated={post.updated}
              mail={post.mail}
              status={post.status}
              image={post.image}
              price={post.price}
              phone={post.phone}
              location={post.location}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

PostsViewMyPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsViewMyPosts;