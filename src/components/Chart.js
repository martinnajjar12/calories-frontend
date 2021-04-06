import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { CircularProgress, Grid } from '@material-ui/core';
import { EventTracker } from '@devexpress/dx-react-chart';
import { useSelector } from 'react-redux';
import commonStyles from '../utils/commonStyles';

const CustomChart = () => {
  const chartData = useSelector(state => state.chartDataState);
  const commonClasses = commonStyles();
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setNoData(true);
    }, 4000);
  }, []);

  return chartData.length === 0
    ? (
      <Grid className={commonClasses.fullHeight} container justify="center" alignItems="center">
        {
          noData
            ? <h1 className={commonClasses.darkText}>No Data</h1>
            : <CircularProgress size={100} />
        }
      </Grid>
    ) : (
      <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries
            valueField="value"
            argumentField="created_at"
            barWidth={1}
          />
          <EventTracker />
        </Chart>
      </Paper>
    );
};

export default CustomChart;
