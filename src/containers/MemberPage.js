import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import MemberPageContent from '../components/MemberPageContent';
import NavigationBar from '../components/NavigationBar';
import carbohydrates from '../assets/images/carbohydrates.cms';
import proteins from '../assets/images/proteins.png';
import fats from '../assets/images/fats.jpg';
import commonStyles from '../utils/commonStyles';
import submitValues from '../actions/submitValues';
import showAlert from '../actions/showAlert';
import CustomAlert from '../components/CustomAlert';

const carbInfo = 'Carbohydrates are found in a wide array of both healthy and unhealthy foods—bread, beans, milk, popcorn, potatoes, cookies, spaghetti, soft drinks, corn, and cherry pie. They also come in a variety of forms. The most common and abundant forms are sugars, fibers, and starches.';
const proteinsInfo = 'You can get Proteins from lean meats (such as beef and lamb) and also from the poultry (such as chicken and ducks). Fish and seafood also contain a good amount of Protein as well as dairy products like milk, yoghurt, cheese... etc. Legumes and nuts also contain Protein.';
const fatsInfo = 'Fats can be found in different kinds of food such as Avocado, cheese and dark chocolate. Eggs and fatty fish also contain Fats. You can have fats also in coconuts and full fat yoghurt.';

const MemberPage = () => {
  const commonClasses = commonStyles();
  let {
    uid,
    client,
    accessToken,
    expiry,
  } = useSelector(state => state.sessionState);

  const registrationState = useSelector(state => state.registrationState);

  if (!accessToken) {
    uid = registrationState.uid;
    client = registrationState.client;
    accessToken = registrationState.accessToken;
    expiry = registrationState.expiry;
  }

  const [meal, setMeal] = useState({
    Carbohydrates: '',
    Fats: '',
    Proteins: '',
  });

  const dispatch = useDispatch();

  const changeHandler = (food, amount) => {
    setMeal({
      ...meal,
      [food]: amount,
    });
  };

  const handleSubmit = () => {
    const info = {
      uid,
      client,
      accessToken,
      expiry,
      meal,
    };

    if (meal.Fats && meal.Carbohydrates && meal.Proteins) {
      dispatch(submitValues(info));
    } else {
      dispatch(showAlert({ status: 422, message: 'Fill all the fields please!' }));
    }
  };

  return (
    <div className={commonClasses.bottomMargin70}>
      <Header title="Add Meal" />
      <MemberPageContent submitHandler={handleSubmit} value={meal.Carbohydrates} changeHandler={changeHandler} name="Carbohydrates" image={carbohydrates} info={carbInfo} />
      <MemberPageContent submitHandler={handleSubmit} value={meal.Proteins} changeHandler={changeHandler} name="Proteins" image={proteins} info={proteinsInfo} />
      <MemberPageContent submitHandler={handleSubmit} value={meal.Fats} changeHandler={changeHandler} name="Fats" image={fats} info={fatsInfo} />
      <Grid container justify="center" alignItems="center">
        <Button type="submit" onClick={handleSubmit} size="large" color="primary" variant="contained" className={`${commonClasses.whiteText} ${commonClasses.topMargin30} ${commonClasses.bottomMargin50}`}>ADD MEAL</Button>
      </Grid>
      <CustomAlert />
      <NavigationBar />
    </div>
  );
};

export default MemberPage;
