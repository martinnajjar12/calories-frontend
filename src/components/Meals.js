import { Typography } from '@material-ui/core';
import React from 'react';
import Header from './Header';
import NavigationBar from './NavigationBar';

const Meals = () => (
  <>
    <Header title="Meals" />
    <Typography color="textSecondary">Meals page</Typography>
    <NavigationBar />
  </>
);

export default Meals;
