import React from 'react';
import { useParams } from 'react-router';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPostById, removePostRequest, getIsLoading } from '../../../redux/postsRedux';
import { getLoggedUser } from '../../../redux/usersRedux';
import CommonButton from '../CommonButton/CommonButton';
import OfflineButton from '../OfflineButton/OfflineButton';
import Circular from '../Circular/Circular';
import PlaceOutlinedIcon from '@material-ui/icons/PlaceOutlined';
import Container from '@material-ui/core/Container';
import styles from './PostMy.module.scss';
import utils from '../../../utils';

const PostMy= () => {
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));
  const loggedInUser = useSelector(state => getLoggedUser(state));
  const load = useSelector(state => getIsLoading(state));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removePost = () => {
    dispatch(removePostRequest(id));
    navigate('/myposts');
  };

  const editButton = () => loggedInUser.mail === post.mail &&
    <div className={styles.buttons}>
      <div className={styles.button}>
        <Link to={`/post/${id}/edit`} className={styles.link}><CommonButton>Edit Post</CommonButton></Link>
      </div>
      <div className={styles.button}>
        <CommonButton onClick={() => removePost()}>Remove Post</CommonButton>
      </div>
    </div>;

  const isDraft = () => post.status === 'draft' &&
    <div className={styles.draftWarning}>
      <p>This post is a draft! Click on &apos;Edit Post&apos; to publish.</p>
    </div>;

  if (!post) return <Navigate to='/' />;
  return (
    <Container>
      { (load.active) && <div className={styles.circular}><Circular /></div> }
      { ((!load.active && !load.success) || load.error) &&
        (
          <div className={styles.root}>
            <div className={styles.postContainer}>
              {isDraft()}
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
                {editButton()}
                <Link to={`/myposts`} className={styles.link}><OfflineButton>Back to posts</OfflineButton></Link>
              </div>
            </div>
          </div>
        )}
    </Container>
  );
};

export default PostMy;