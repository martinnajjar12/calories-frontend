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
  fontStyles: {
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar color="primary">
      <Toolbar className={classes.root}>
        <Typography className={classes.fontStyles} component="h1" color="textPrimary" align="center">From Props</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
