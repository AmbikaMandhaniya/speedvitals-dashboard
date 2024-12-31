import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MetricsGraph = ({ data, metricType }) => {
  if (!data || !data.timeseries || !data.values) return null;

  const chartData = data.timeseries.map((time, index) => ({
    time,
    value: data.values[index]
  }));

  const isCLS = metricType === 'cls';
  const yAxisDomain = isCLS ? [0, 0.35] : [0, 250];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
        <XAxis
          dataKey="time"
          tickLine={false}
          axisLine={{ stroke: '#ddd' }}
        />
        <YAxis
          domain={yAxisDomain}
          tickLine={false}
          axisLine={{ stroke: '#ddd' }}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={{ r: 4, fill: "#3b82f6" }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MetricsGraph;
