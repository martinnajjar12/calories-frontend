import {
  Button,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import commonStyles from '../utils/commonStyles';

const useStyles = makeStyles({
  root: {
    '& input': {
      color: 'black',
    },
  },
});

const LoginForm = ({ submitHandler, changeHandler, state }) => {
  const commonClasses = commonStyles();
  const classes = useStyles();

  return (
    <form className={`${commonClasses.centerVertically} ${commonClasses.topMargin40} ${commonClasses.bottomMargin50}`}>
      <FormControl className={`${commonClasses.topMargin15} ${commonClasses.width80}`}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          className={`${commonClasses.darkText} ${classes.root}`}
          value={state.email}
          name="email"
          onChange={e => changeHandler(e)}
          id="email"
          type="email"
          required
        />
      </FormControl>
      <FormControl className={`${commonClasses.topMargin15} ${commonClasses.width80}`}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          className={`${commonClasses.darkText} ${classes.root}`}
          value={state.password}
          name="password"
          onChange={e => changeHandler(e)}
          id="password"
          type="password"
          required
        />
      </FormControl>
      <Button
        type="submit"
        onClick={e => submitHandler(e, state)}
        className={`${commonClasses.topMargin30} ${commonClasses.whiteText}`}
        variant="contained"
        color="primary"
      >
        LOGIN
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  state: PropTypes.object.isRequired,
};

export default LoginForm;
