import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { teal } from '@material-ui/core/colors';

const CommonButton = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      background: teal[700],
      borderRadius: 3,
      border: 0,
      height: 48,
      padding: '0 30px',
      boxShadow: '0 5px 7px 2px teal[500]',
      margin: '15px 15px',
    },
    label: {
      color: `${theme.palette.common.white}`,
      fontSize: 16,
    },
  }));

  const classes = useStyles();
  return (
    <Button
      classes={{
        root: classes.root,
        label: classes.label,
      }}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

CommonButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default CommonButton;