import React from 'react';
import { useParams } from 'react-router';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostById, getIsLoading } from '../../../redux/postsRedux';
import OfflineButton from '../../views/OfflineButton/OfflineButton';
import PlaceOutlinedIcon from '@material-ui/icons/PlaceOutlined';
import Container from '@material-ui/core/Container';
import styles from './TheNewest.module.scss';
import utils from '../../../utils';

const TheNewest = () => {
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));
  const load = useSelector(state => getIsLoading(state));

  if (!post) return <Navigate to='/' />;
  return (
    <Container>
      { ((!load.active && !load.success) || load.error) &&
        (
          <div className={styles.root}>
            <div className={styles.postContainer}>
              <img alt={post.title} src={post.image ? post.image : 'https://www.freeiconspng.com/uploads/no-image-icon-1.jpg'}/>
              <div className={styles.infoContainer}>
                <h1>{post.title}</h1>
                {post.location && (
                  <div className={styles.address}>
                    <PlaceOutlinedIcon/>
                    <h1>{post.location}</h1>
                  </div>
                )}
                <div className={styles.text}>
                  <p>{post.text}</p>
                </div>
                <div className={styles.price}>
                  <p>Price: {post.price} USD / day</p>
                </div>
                <div className={styles.contactInfo}>
                  <h3>Contact info:</h3>
                  <p><span>email:</span> {post.mail}</p>
                  <p><span>phone number:</span> {post.phone}</p>
                </div>
                <div className={styles.dates}>
                  <p>Published: {utils.dateToStr(post.created)} {post.updated && (<span>Edited: {utils.dateToStr(post.updated)}</span>)}</p>
                </div>
                <Link to={`/homepagelogged`} className={styles.link}><OfflineButton>Back to posts</OfflineButton></Link>
              </div>
            </div>
          </div>
        )}
    </Container>
  );
};

export default TheNewest;