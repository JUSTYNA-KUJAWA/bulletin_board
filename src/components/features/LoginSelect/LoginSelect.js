import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getLoggedUser, loginUser, logoutUser } from '../../../redux/usersRedux';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import styles from './LoginSelect.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:31,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 3,
  },
}));

const LoginSelect = ({ className}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector(state => getLoggedUser(state));
  const [role, setRole] = useState('guest');

  const handleRoleChange = (event) => {
    if(event.target.value === 'loggedUser'){
      const user = {
        name: 'Justyna Kujawa',
        mail: 'admin@gmail.com',
        role: 'loggedUser',
      };
      dispatch(loginUser(user));
      navigate('/myposts');
    } else {
      dispatch(logoutUser());
      navigate('/');
    }
    setRole(event.target.value);
  };
  const loginSelect = () => !loggedInUser.role || loggedInUser.role !== 'googleUser' ?
    (
      <FormControl classes={{ root: classes.redColor}} className={styles.navSelect}>
        <InputLabel id="role-select-label" classes={{ root: classes.redColor }}>Selection</InputLabel>
        <Select
          labelId="role-select-label"
          id="role-select"
          value={role}
          onChange={handleRoleChange}
          classes={{
            root: classes.redColor,
            icon: classes.redColor,
            select: classes.redColor,
          }}
        >
          <MenuItem value={'guest'} style={{ fontSize: 20 }}>Guest</MenuItem>
          <MenuItem value={'loggedUser'} style={{ fontSize: 20 }}>LoggedUser</MenuItem>
        </Select>
      </FormControl>
    )
    : null;
return (
  <div className={clsx(className, styles.root)}>
    <div className={styles.navlinks}>
      {loginSelect()}
    </div>
  </div>

);
};

LoginSelect.propTypes = {
  className: PropTypes.string,
};
  
export default LoginSelect;