import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import commonStyles from '../utils/commonStyles';

const RegistrationForm = ({ state, handleChange, handleSubmit }) => {
  const commonClasses = commonStyles();

  return (
    <form className={`${commonClasses.centerVertically} ${commonClasses.topMargin50} ${commonClasses.bottomMargin50}`}>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          className={commonClasses.darkText}
          value={state.name}
          name="name"
          onChange={e => handleChange(e)}
          id="name"
          type="text"
          required
        />
      </FormControl>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          className={commonClasses.darkText}
          value={state.email}
          name="email"
          onChange={e => handleChange(e)}
          id="email"
          type="email"
          required
        />
      </FormControl>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          className={commonClasses.darkText}
          value={state.password}
          name="password"
          onChange={e => handleChange(e)}
          id="password"
          type="password"
          required
        />
      </FormControl>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="passwordConfirmation">Password Confirmation</InputLabel>
        <Input
          className={commonClasses.darkText}
          value={state.passwordConfirmation}
          name="passwordConfirmation"
          onChange={e => handleChange(e)}
          id="passwordConfirmation"
          type="password"
          required
        />
      </FormControl>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="age">Age</InputLabel>
        <Input
          className={commonClasses.darkText}
          value={state.age}
          name="age"
          onChange={e => handleChange(e)}
          id="age"
          type="number"
          inputProps={{ min: 1 }}
          required
        />
      </FormControl>
      <FormControl className={`${commonClasses.topMargin15} ${commonClasses.formControlWidth}`}>
        <InputLabel htmlFor="gender">Gender</InputLabel>
        <Select
          className={commonClasses.darkText}
          onChange={e => handleChange(e)}
          labelId="gender"
          value={state.gender}
          name="gender"
          required
        >
          <MenuItem className={commonClasses.darkText} value="male">Male</MenuItem>
          <MenuItem className={commonClasses.darkText} value="femail">Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="height">Height</InputLabel>
        <Input
          className={commonClasses.darkText}
          value={state.height}
          name="height"
          inputProps={{ min: 40 }}
          onChange={e => handleChange(e)}
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
          inputProps={{ min: 35 }}
          className={commonClasses.darkText}
          value={state.weight}
          name="weight"
          onChange={e => handleChange(e)}
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
          className={commonClasses.darkText}
          onChange={e => handleChange(e)}
          labelId="activity"
          value={state.activity}
          name="activity"
          required
        >
          <MenuItem className={commonClasses.darkText} value="sedentary">Sedentary: little or no excercise</MenuItem>
          <MenuItem className={commonClasses.darkText} value="moderate">Moderate: excercise 4-5 times/week</MenuItem>
          <MenuItem className={commonClasses.darkText} value="active">Active: daily excercise</MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={() => handleSubmit(state)}
        className={`${commonClasses.topMargin30} ${commonClasses.whiteText}`}
        variant="contained"
        color="primary"
      >
        CREATE ACCOUNT
      </Button>
    </form>
  );
};

RegistrationForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  state: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RegistrationForm;
