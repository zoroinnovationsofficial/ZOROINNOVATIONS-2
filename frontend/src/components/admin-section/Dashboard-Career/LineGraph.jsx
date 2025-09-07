import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer
} from "recharts";

const chartData = [
  { name: "Jan", value: 80 },
  { name: "", value: 68 },
  { name: "", value: 74 },
  { name: "", value: 66 },
  { name: "Feb", value: 72 },
  { name: "", value: 60 },
  { name: "", value: 88 },
  { name: "", value: 75 },
  { name: "Mar", value: 85 },
];

const LineGraph = () => {
  return (
      <ResponsiveContainer width="100%" height="100%" className={"mt-4 p-6 bg-white rounded-xl"}>
        <LineChart data={chartData}>
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 14, fill: '#6B7280', fontWeight: 600 }} 
            axisLine={false}
            tickLine={false}
          />
          <Line 
            type="monotone"
            dataKey="value" 
            stroke="#4B5563" 
            strokeWidth={4} 
            dot={false} 
          />
        </LineChart>
      </ResponsiveContainer>
  );
};

export default LineGraph;


