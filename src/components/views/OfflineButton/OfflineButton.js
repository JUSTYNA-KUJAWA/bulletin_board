import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';

const OfflineButton = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      borderRadius: 4,
      border: `solid 2px ${theme.palette.primary.dark}`,
      height: 48,
      padding: '0 30px',
      margin: '0 10px',
    },
    label: {
      color: `${theme.palette.primary.dark}`,
      fontSize: 18,
      fontWeight: "bold",
    },
  }));

  const classes = useStyles();
  return (
    <Button
      onClick={props.onClick}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      {props.children}
    </Button>
  );
};

OfflineButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default OfflineButton;