import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
  },
  fontStyles: {
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
});

const Header = ({ title }) => {
  const classes = useStyles();
  return (
    <AppBar color="primary" position="sticky">
      <Toolbar className={classes.root}>
        <Typography className={classes.fontStyles} component="h1" color="textPrimary" align="center">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
