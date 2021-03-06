import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core/';
import SmallCard from '../../views/SmallCard/SmallCard';
import styles from './PostView.module.scss';

const PostsView = ({ posts }) => {
  return (
    <div className={styles.root}>
      <Grid container spacing={3}>
        {posts.map(post => (
          <Grid item xs={12} sm={4} key={post._id}>
            <SmallCard
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

PostsView.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsView;