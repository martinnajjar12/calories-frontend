import { Typography } from '@material-ui/core';
import React from 'react';
import Header from './Header';
import NavigationBar from './NavigationBar';

const Progress = () => (
  <>
    <Header title="Progress" />
    <Typography color="textSecondary">Hello World</Typography>
    <NavigationBar />
  </>
);

export default Progress;
