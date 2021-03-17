import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {
  InsertChart,
  MoreHoriz,
  PieChart,
  TrendingUp,
} from '@material-ui/icons';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#67899c',
  },
  fSize: {
    fontSize: 12,
  },
  whiteCol: {
    color: '#fff',
  },
});

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar disableGutters>
          <Grid container justify="space-between">
            <IconButton className={classes.whiteCol}>
              <Grid container direction="column" alignItems="center">
                <InsertChart />
                <Typography component="p" className={classes.fSize} variant="subtitle2" color="textPrimary">Add Measure</Typography>
              </Grid>
            </IconButton>
            <IconButton className={classes.whiteCol}>
              <Grid container direction="column" alignItems="center">
                <TrendingUp />
                <Typography component="p" className={classes.fSize} variant="subtitle2" color="textPrimary">Track It</Typography>
              </Grid>
            </IconButton>
            <IconButton className={classes.whiteCol}>
              <Grid container direction="column" alignItems="center">
                <PieChart />
                <Typography component="p" className={classes.fSize} variant="subtitle2" color="textPrimary">Progress</Typography>
              </Grid>
            </IconButton>
            <IconButton className={classes.whiteCol}>
              <Grid container direction="column" alignItems="center">
                <MoreHoriz />
                <Typography component="p" className={classes.fSize} variant="subtitle2" color="textPrimary">More</Typography>
              </Grid>
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationBar;
