import {
  Card,
  CardMedia,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import FormTitle from './FormTitle';
import UserForm from './UserForm';

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

const LoginPage = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cardHeight}
          image="calories.png"
        />
      </Card>
      <FormTitle />
      <UserForm />
    </>
  );
};

export default LoginPage;
