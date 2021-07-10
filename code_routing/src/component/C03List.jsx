import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

class C03List extends Component {
  render() {
    const data1 = this.props.Glacierdata;
    const data2 = this.props.Seadata;

    return (
      <React.Fragment>
        <LineChart
          width={1400}
          height={500}
          margin={{
            top: 10,
            right: 30,
            left: 50,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='Year' />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign='top' />
          <Line
            type='monotone'
            dataKey='Mean cumulative mass balance'
            stroke='#b3b300'
            activeDot={{ r: 8 }}
          />
          <Line
            type='monotone'
            dataKey='GMSL'
            stroke='blue'
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </React.Fragment>
    );
  }
}

export default C03List;
