import { Typography } from '@material-ui/core';
import React from 'react';
import Header from './Header';
import NavigationBar from './NavigationBar';

const More = () => (
  <>
    <Header title="Settings" />
    <Typography color="textSecondary">More page</Typography>
    <NavigationBar />
  </>
);

export default More;
