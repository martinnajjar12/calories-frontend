import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import commonStyles from '../utils/commonStyles';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import FoodKind from './FoodKind';
import Header from './Header';
import NavigationBar from './NavigationBar';
import carbohydrates from '../assets/images/carbohydrates.cms';
import grabValues from '../utils/grabValues';

const Meals = () => {
  const commonClasses = commonStyles();
  const todayData = useSelector(state => state.todayDataState);

  let bmr;
  let activity;
  let carbMeasurements;
  let proteinsMeasurements;
  let fatsMeasurements;
  let caloriesMeasurements;
  let carbAmount;
  let proteinsAmount;
  let fatsAmount;
  let caloriesAmount;
  let caloriesNeeded;

  if (todayData.length) {
    todayData.forEach(item => {
      switch (item.name) {
        case 'carbohydrates':
          carbMeasurements = item.measurements;
          bmr = item.user.bmr;
          activity = item.user.activity;
          break;
        case 'proteins':
          proteinsMeasurements = item.measurements;
          break;
        case 'fats':
          fatsMeasurements = item.measurements;
          break;
        case 'calories':
          caloriesMeasurements = item.measurements;
          break;

        default:
          break;
      }
    });

    carbAmount = grabValues(carbMeasurements)
      .reduce((accmulator, currentValue) => accmulator + currentValue);
    proteinsAmount = grabValues(proteinsMeasurements)
      .reduce((accmulator, currentValue) => accmulator + currentValue);
    fatsAmount = grabValues(fatsMeasurements)
      .reduce((accmulator, currentValue) => accmulator + currentValue);
    caloriesAmount = grabValues(caloriesMeasurements)
      .reduce((accmulator, currentValue) => accmulator + currentValue);
  }

  if (activity === 'sedentary') {
    caloriesNeeded = bmr - 500;
  } else if (activity === 'moderate') {
    caloriesNeeded = bmr - 250;
  } else {
    caloriesNeeded = bmr - 100;
  }

  const caloriesPercent = parseInt((caloriesAmount * 100) / caloriesNeeded, 10);
  const carbPercent = parseInt((carbAmount * 100) / (caloriesNeeded / 4), 10);
  const proteinsPercent = parseInt((proteinsAmount * 100) / (caloriesNeeded / 4), 10);
  const fatsPercent = parseInt((fatsAmount * 100) / (caloriesNeeded / 9), 10);

  return todayData.length ? (
    <div className={commonClasses.lightGreyBg}>
      <Header title="TrackIt" />
      <div className={commonClasses.whiteBackground}>
        <Typography align="center" className={`${commonClasses.darkText} ${commonClasses.normalPadding}`}>current date</Typography>
      </div>
      <Grid className={`${commonClasses.whiteBackground} ${commonClasses.normalPadding}`} container justify="space-around" alignItems="center">
        <CircularProgressWithLabel value={carbPercent} />
        <CircularProgressWithLabel value={proteinsPercent} />
        <CircularProgressWithLabel value={fatsPercent} />
        <CircularProgressWithLabel value={caloriesPercent} />
      </Grid>
      <Grid container justify="center" alignItems="center">
        <FoodKind name="Carb" image={carbohydrates} />
        <FoodKind name="Carb" image={carbohydrates} />
        <FoodKind name="Carb" image={carbohydrates} />
        <FoodKind name="Carb" image={carbohydrates} />
      </Grid>
      <NavigationBar />
    </div>
  ) : (<h1>Loading...</h1>);
};

export default Meals;
