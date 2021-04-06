import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import logout from '../actions/logout';
import getValidUser from '../utils/getValidUser';

const useStyles = makeStyles({
  root: {
    justifyContent: 'space-between',
    flex: 2,
  },
  fontStyles: {
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
  flex1: {
    flex: 1,
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'end',
    flex: 1,
  },
  marginLeftAuto: {
    marginLeft: 'auto',
  },
});

const Header = ({ title, isLogged }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const logoutHandler = () => {
    const { uid, accessToken, client } = getValidUser();
    dispatch(logout(uid, accessToken, client));
  };

  return (
    <AppBar color="primary" position="sticky">
      <Toolbar className={classes.root}>
        <div className={classes.flex1} />
        <Typography className={classes.fontStyles} component="h1" color="textPrimary" align="center">{title}</Typography>
        <div className={classes.iconWrapper}>
          { isLogged ? (
            <IconButton className={classes.marginLeftAuto} edge="end" onClick={logoutHandler}>
              <ExitToAppIcon />
            </IconButton>
          ) : ''}
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  isLogged: PropTypes.bool,
};

Header.defaultProps = {
  isLogged: true,
};

export default Header;
