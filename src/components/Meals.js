import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import commonStyles from '../utils/commonStyles';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import Header from './Header';
import NavigationBar from './NavigationBar';

const Meals = () => {
  const commonClasses = commonStyles();
  return (
    <div className={commonClasses.lightGreyBg}>
      <Header title="TrackIt" />
      <div className={commonClasses.whiteBackground}>
        <Typography className={`${commonClasses.darkText} ${commonClasses.normalPadding}`}>current date</Typography>
      </div>
      <Grid className={`${commonClasses.whiteBackground} ${commonClasses.normalPadding}`} container justify="space-around" alignItems="center">
        <CircularProgressWithLabel value={75} />
        <CircularProgressWithLabel value={25} />
        <CircularProgressWithLabel value={60} />
        <CircularProgressWithLabel value={35} />
      </Grid>
      <NavigationBar />
    </div>
  );
};

export default Meals;
