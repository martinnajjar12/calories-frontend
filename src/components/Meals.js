import { Grid } from '@material-ui/core';
import React from 'react';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import Header from './Header';
import NavigationBar from './NavigationBar';

const Meals = () => (
  <>
    <Header title="TrackIt" />
    <p>current date</p>
    <Grid container justify="space-around" alignItems="center">
      <CircularProgressWithLabel value={75} />
      <CircularProgressWithLabel value={25} />
      <CircularProgressWithLabel value={60} />
      <CircularProgressWithLabel value={35} />
    </Grid>
    <NavigationBar />
  </>
);

export default Meals;
