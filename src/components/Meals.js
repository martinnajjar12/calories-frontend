import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import commonStyles from '../utils/commonStyles';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import FoodKind from './FoodKind';
import Header from './Header';
import NavigationBar from './NavigationBar';
import carbohydrates from '../assets/images/carbohydrates.cms';

const Meals = () => {
  const commonClasses = commonStyles();

  return (
    <div className={commonClasses.lightGreyBg}>
      <Header title="TrackIt" />
      <div className={commonClasses.whiteBackground}>
        <Typography align="center" className={`${commonClasses.darkText} ${commonClasses.normalPadding}`}>current date</Typography>
      </div>
      <Grid className={`${commonClasses.whiteBackground} ${commonClasses.normalPadding}`} container justify="space-around" alignItems="center">
        <CircularProgressWithLabel value={75} />
        <CircularProgressWithLabel value={25} />
        <CircularProgressWithLabel value={60} />
        <CircularProgressWithLabel value={35} />
      </Grid>
      <Grid container justify="center" alignItems="center">
        <FoodKind name="Carb" image={carbohydrates} />
        <FoodKind name="Carb" image={carbohydrates} />
        <FoodKind name="Carb" image={carbohydrates} />
        <FoodKind name="Carb" image={carbohydrates} />
      </Grid>
      <NavigationBar />
    </div>
  );
};

export default Meals;
