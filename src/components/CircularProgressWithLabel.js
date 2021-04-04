import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import commonStyles from '../utils/commonStyles';

const CircularProgressWithLabel = ({ value }) => {
  const commonClasses = commonStyles();
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={value} size={60} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography className={commonClasses.fontWeightBold} component="div" color="textSecondary">
          {`${value}G`}
        </Typography>
      </Box>
    </Box>
  );
};

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CircularProgressWithLabel;
