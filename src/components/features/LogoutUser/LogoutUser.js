import React from 'react';
import { useNavigate,} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLoggedUser, logoutUser } from '../../../redux/usersRedux';
import { GoogleLogout } from 'react-google-login';
import styles from './LogoutUser.module.scss';


const LogoutUser = () => {

  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedInUser = useSelector(state => getLoggedUser(state));


  const logoutGoogle = () => {
    dispatch(logoutUser());
    navigate('/');
  };

 
  const logoutGoogleButton = () => loggedInUser.role === 'googleUser' ?
    (
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={logoutGoogle}
        className={styles.navItem}
      >
      </GoogleLogout>
    )
    : null;

  return (
    <div className={styles.root}>
        <div className={styles.navlinks}>
        {logoutGoogleButton()}
        </div>
      </div>
  
  );
};

export default LogoutUser;