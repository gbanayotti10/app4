import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import * as d3 from 'd3'; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Child2 = ({ data }) => {
  const groupedData = d3.group(data, d => d.day);
  const averageTips = Array.from(groupedData, ([day, values]) => {
    const avgTip = d3.mean(values, d => d.tip);
    return { day, avgTip };
  });

  const chartData = {
    labels: averageTips.map(d => d.day),
    datasets: [
      {
        label: 'Average Tip',
        data: averageTips.map(d => d.avgTip),
        backgroundColor: '#69b3a2',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Average Tip',
        },
        grid: {
          display: false, 
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Average Tip by Day',
        position: 'top',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default Child2;
