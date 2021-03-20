import {
  Button,
  Card,
  CardMedia,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import commonStyles from '../utils/commonStyles';

const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
    marginTop: 40,
    backgroundColor: '#fafafa',
  },
  cardHeight: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 0,
    maxWidth: 300,
    paddingBottom: 125,
    margin: '0 auto',
  },
});

const GuestPage = () => {
  const commonClasses = commonStyles();
  const classes = useStyles();
  return (
    <>
      <Header title="Calories Tracker" />
      <Card className={classes.root}>
        <CardMedia
          className={classes.cardHeight}
          image="calories.png"
        />
      </Card>
      <Grid container alignItems="center" direction="column">
        <Link className={`${commonClasses.topMargin50} ${commonClasses.anchorText}`} to="/login"><Button className={commonClasses.whiteText} color="primary" variant="contained">Login</Button></Link>
        <Link className={`${commonClasses.topMargin15} ${commonClasses.anchorText}`} to="/registration"><Button className={commonClasses.whiteText} color="primary" variant="contained">Create an account</Button></Link>
      </Grid>
    </>
  );
};

export default GuestPage;
