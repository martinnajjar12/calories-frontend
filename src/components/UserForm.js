import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import React from 'react';
import commonStyles from '../utils/commonStyles';

const UserForm = () => {
  const commonClasses = commonStyles();
  return (
    <form className={`${commonClasses.centerVertically} ${commonClasses.topMargin50} ${commonClasses.bottomMargin50}`}>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          type="text"
          autoFocus
          required
        />
      </FormControl>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          type="email"
          required
        />
      </FormControl>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          required
        />
      </FormControl>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="passwordConfirmation">Password Confirmation</InputLabel>
        <Input
          id="passwordConfirmation"
          type="password"
          required
        />
      </FormControl>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="age">Age</InputLabel>
        <Input
          id="age"
          type="number"
          required
        />
      </FormControl>
      <FormControl className={`${commonClasses.topMargin15} ${commonClasses.formControlWidth}`}>
        <InputLabel htmlFor="gender">Gender</InputLabel>
        <Select
          labelId="gender"
          value=""
          required
        >
          <MenuItem className={commonClasses.darkText} value="male">Male</MenuItem>
          <MenuItem className={commonClasses.darkText} value="femail">Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="height">Height</InputLabel>
        <Input
          id="height"
          type="number"
          required
          aria-describedby="heightHelperText"
        />
        <FormHelperText id="heightHelperText">Should be in CM</FormHelperText>
      </FormControl>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="weight">Weight</InputLabel>
        <Input
          id="weight"
          type="number"
          required
          aria-describedby="weightHelperText"
        />
        <FormHelperText id="weightHelperText">Should be in KG</FormHelperText>
      </FormControl>
      <FormControl className={`${commonClasses.topMargin15} ${commonClasses.formControlWidth}`}>
        <InputLabel htmlFor="activity">Activity</InputLabel>
        <Select
          labelId="activity"
          value=""
          required
        >
          <MenuItem className={commonClasses.darkText} value="sedentary">Sedentary: little or no excercise</MenuItem>
          <MenuItem className={commonClasses.darkText} value="moderate">Moderate: excercise 4-5 times/week</MenuItem>
          <MenuItem className={commonClasses.darkText} value="active">Active: daily excercise</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

export default UserForm;
