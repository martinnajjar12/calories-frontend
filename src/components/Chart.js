import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';

const data = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.440 },
  { year: '1990', population: 5.310 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.930 },
];

const Demo = () => {
  const [loading] = useState(true);
  const [state] = useState(data);

  return loading ? (<h1>Loading</h1>) : (
    <Paper>
      <Chart data={state}>
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries
          valueField="population"
          argumentField="year"
        />
        <EventTracker />
        <HoverState />
      </Chart>
    </Paper>
  );
};

export default Demo;
