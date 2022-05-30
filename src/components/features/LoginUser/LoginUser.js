import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLoggedUser, addUserRequest, loginUser } from '../../../redux/usersRedux';
import { GoogleLogin} from 'react-google-login';
import styles from './LoginUser.module.scss';

const LoginUser = () => {

  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedInUser = useSelector(state => getLoggedUser(state));

  const loginGoogle = (res) => {
    const { email, name } = res.profileObj;
    const user = { name, email, role: 'googleUser'};
    dispatch(addUserRequest(user));
    dispatch(loginUser(user));
    navigate('/userloggedposts');
  };

  const responseGoogle = (res) => {
    //console.log(res);
  };

  const loginGoogleButton = () => !loggedInUser.role ?
    (
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={loginGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        className={styles.navItem}
      ></GoogleLogin>
    )
    : null;

  return (
    <div className={styles.root}>
        <div className={styles.navlinks}>
        {loginGoogleButton()}
        </div>
      </div>
  
  );
};

export default LoginUser;