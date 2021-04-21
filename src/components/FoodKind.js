import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import commonStyles from '../utils/commonStyles';

const useStyles = makeStyles({
  autoSize: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  maxWidth50: {
    maxWidth: '50%',
  },
});

const FoodKind = ({
  sign,
  value,
  name,
  image,
}) => {
  const classes = useStyles();
  const commonClasses = commonStyles();

  return (
    <Grid className={`${commonClasses.leftMargin15} ${commonClasses.topMargin15} ${commonClasses.normalPadding} ${commonClasses.whiteBackground}`} item xs={5}>
      <Grid container justify="space-between" alignItems="center">
        <Grid xs={5} className={classes.maxWidth50} item>
          <Grid container justify="center" alignItems="center">
            <img className={classes.autoSize} src={image} alt={name} />
          </Grid>
        </Grid>
        <Grid xs={5} className={commonClasses.darkText} item>
          <Typography color="textSecondary" variant="subtitle2">{name}</Typography>
          <Typography className={commonClasses.fontWeightBold} color="textSecondary">{`${value} ${sign}`}</Typography>
        </Grid>

      </Grid>
    </Grid>
  );
};

FoodKind.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  sign: PropTypes.string,
};

FoodKind.defaultProps = {
  sign: 'G',
};

export default FoodKind;
