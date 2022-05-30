import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserLogedPosts} from '../../../redux/postsRedux';
import { getLoggedUser } from '../../../redux/usersRedux';
import PostsView from '../../features/PostView/PostView';
import CommonButton from '../CommonButton/CommonButton';
import Container from '@material-ui/core/Container';
import styles from './UserLoggedPosts.module.scss';

const UserLoggedPosts = () => {
  const loggedInUser = useSelector(state => getLoggedUser(state));
  const posts = useSelector(state => getUserLogedPosts(state, loggedInUser.email));

  const welcomeMessage = () => loggedInUser.name ?
    (
      <div className='text'>
        <h2>Welcome {loggedInUser.name}!</h2>
        <h3>You can now add and edit your posts below</h3>
      </div>
    )
    :
    (
      <div>
        <h2>Welcome to Bulletin Board!</h2>
        <h3>Log in with Google / Select a role from the dropdown menu in the navigation bar / Add and edit posts</h3>
      </div>
    );

  const postAddButton = () => loggedInUser.name &&
    <div className={styles.addButton}>
      <Link to={`/post/add`} className={styles.link}><CommonButton>Add Post</CommonButton></Link>
    </div>;

  return (
    <Container className={styles.root}>
      <div className={styles.welcome}>
        {welcomeMessage()}
        {postAddButton()}
      </div>
      <PostsView posts={posts}/>
    </Container>
  );
};

export default UserLoggedPosts;