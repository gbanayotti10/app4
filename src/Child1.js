import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const Child1 = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Total Bill vs Tips',
        data: data.map(d => ({ x: d.total_bill, y: d.tip })),
        backgroundColor: '#69b3a3',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Total Bill',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Tips',
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Total Bill vs Tips',
        position: 'top',
      },
    },
  };

  return <Scatter data={chartData} options={options} />;
};

export default Child1;
