import { Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import commonStyles from '../utils/commonStyles';

const FormTitle = ({ title }) => {
  const commonClasses = commonStyles();
  return (
    <Typography
      variant="h2"
      className={`${commonClasses.textSecondary} ${commonClasses.centerText} ${commonClasses.topMargin30}`}
    >
      {title}
    </Typography>
  );
};

FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FormTitle;
