import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import commonStyles from '../utils/commonStyles';
import CircularProgressWithLabel from '../components/CircularProgressWithLabel';
import FoodKind from '../components/FoodKind';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import carbohydrates from '../assets/images/carbohydrates.cms';
import proteins from '../assets/images/proteins.png';
import fats from '../assets/images/fats.jpg';
import calories from '../assets/images/trackitCalories.jfif';
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
        <Typography align="center" className={`${commonClasses.darkText} ${commonClasses.fontWeightBold} ${commonClasses.normalPadding}`}>{new Date().toLocaleDateString()}</Typography>
      </div>
      <Grid className={`${commonClasses.whiteBackground} ${commonClasses.normalPadding}`} container justify="space-around" alignItems="center">
        <Grid item>
          <Grid container justify="center" alignItems="center" direction="column">
            <CircularProgressWithLabel value={carbPercent} />
            <Typography className={commonClasses.topMargin15} color="textSecondary" variant="subtitle2">Carbohydrates</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center" alignItems="center" direction="column">
            <CircularProgressWithLabel value={proteinsPercent} />
            <Typography className={commonClasses.topMargin15} color="textSecondary" variant="subtitle2">Proteins</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center" alignItems="center" direction="column">
            <CircularProgressWithLabel value={fatsPercent} />
            <Typography className={commonClasses.topMargin15} color="textSecondary" variant="subtitle2">Fats</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center" alignItems="center" direction="column">
            <CircularProgressWithLabel value={caloriesPercent} />
            <Typography className={commonClasses.topMargin15} color="textSecondary" variant="subtitle2">Calories</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <FoodKind name="Carbs" value={carbAmount} image={carbohydrates} />
        <FoodKind name="Proteins" image={proteins} value={proteinsAmount} />
        <FoodKind name="Fats" image={fats} value={fatsAmount} />
        <FoodKind name="Calories" sign="C" image={calories} value={caloriesAmount} />
      </Grid>
      <NavigationBar />
    </div>
  ) : (<h1>Loading...</h1>);
};

export default Meals;
