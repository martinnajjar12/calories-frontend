import { FormControl, Input, InputLabel } from '@material-ui/core';
import React from 'react';
import commonStyles from '../utils/commonStyles';

const UserForm = () => {
  const commonClasses = commonStyles();
  return (
    <form className={`${commonClasses.centerVertically} ${commonClasses.topMargin}`}>
      <FormControl>
        <InputLabel htmlFor="name">Enter Name:</InputLabel>
        <Input
          id="name"
          type="text"
          autoFocus
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="email">Enter Email:</InputLabel>
        <Input
          id="email"
          type="email"
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Enter Password:</InputLabel>
        <Input
          id="password"
          type="password"
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="passwordConfirmation">Re-Enter Password:</InputLabel>
        <Input
          id="passwordConfirmation"
          type="password"
          required
        />
      </FormControl>
    </form>
  );
};

export default UserForm;
