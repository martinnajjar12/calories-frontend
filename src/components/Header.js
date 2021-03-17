import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
  },
  boldFont: {
    fontWeight: 'bold',
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar color="primary">
      <Toolbar className={classes.root}>
        <Typography className={classes.boldFont} component="h1" color="textPrimary" align="center">From Props</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
