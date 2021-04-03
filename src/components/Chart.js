import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';
import { useSelector } from 'react-redux';

const Demo = () => {
  const chartData = useSelector(state => state.chartDataState);

  return chartData.length === 0 ? (<h1>No data</h1>) : (
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

export default Demo;
