import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardActions } from '@material-ui/core';
import OutlinedButton from '../OfflineButton/OfflineButton';
import PropTypes from 'prop-types';
import styles from './SmallCardTitleLogged.module.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    paddingBottom: "20pt",
    marginBottom: "20pt",
  },
}));

const SmallCardTitleLogged = (props) => {
  console.log(props);
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        className={classes.header}
        title={props.title}
        subheader={""}
      />
      <CardMedia
        component="img"
        height="200"
        image={props.image ? props.image : 'https://www.freeiconspng.com/uploads/no-image-icon-1.jpg'}
        alt={props.title}
      />
      <CardActions>
        <Link to={`/post3/${props.id}`} className={styles.link}> <OutlinedButton>Show more</OutlinedButton></Link>
      </CardActions>
    </Card>
  );
};

SmallCardTitleLogged.propTypes={
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default SmallCardTitleLogged ;