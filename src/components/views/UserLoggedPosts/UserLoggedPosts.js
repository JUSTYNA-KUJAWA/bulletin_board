import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserLogedPosts} from '../../../redux/postsRedux';
import { getLoggedUser } from '../../../redux/usersRedux';
import PostViewMyPosts from '../../features/PostViewMyPosts/PostViewMyPosts';
import CommonButton from '../CommonButton/CommonButton';
import Container from '@material-ui/core/Container';
import styles from './UserLoggedPosts.module.scss';
import {IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const UserLoggedPosts = ({userStatus}) => {
  const loggedInUser = useSelector(state => getLoggedUser(state));
  const posts = useSelector(state => getUserLogedPosts(state, loggedInUser.mail));

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
      <Link to={`/myposts`} className={styles.link}><CommonButton>My posts</CommonButton></Link>
      <Link to={`/allmyposts`} className={styles.link}><CommonButton>All posts</CommonButton></Link>
      {!userStatus && (
          <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                color='inherit'
                component={Link}
                to={'/'}
              >
              <AccountCircle />
                Logout
              </IconButton>  
         )}   
    </div>;

  return (
    <Container className={styles.root}>
      <div className={styles.welcome}>
        {welcomeMessage()}
        {postAddButton()}
      </div>
      <PostViewMyPosts posts={posts}/>
    </Container>
  );
};

export default UserLoggedPosts;