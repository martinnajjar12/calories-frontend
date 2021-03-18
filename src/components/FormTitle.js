import { Typography } from '@material-ui/core';
import React from 'react';
import commonStyles from '../utils/commonStyles';

const FormTitle = () => {
  const commonClasses = commonStyles();
  return (
    <Typography
      variant="h2"
      className={`${commonClasses.textSecondary} ${commonClasses.centerText} ${commonClasses.topMargin}`}
    >
      Login
    </Typography>
  );
};

export default FormTitle;
