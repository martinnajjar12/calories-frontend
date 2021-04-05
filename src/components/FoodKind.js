import { Grid, makeStyles } from '@material-ui/core';
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

const FoodKind = ({ name, image }) => {
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
          {name}
        </Grid>

      </Grid>
    </Grid>
  );
};

FoodKind.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodKind;
