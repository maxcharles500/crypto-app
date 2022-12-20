import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

 const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  console.log('ch' , coinHistory)

  for (let i = coinHistory?.data?.history?.length - 1; i >= 0; i--) {
    coinTimestamp.push(
       new Date(coinHistory.data.history[i].timestamp * 1000).toLocaleDateString()
    );
    coinPrice.push(coinHistory.data.history[i].price);
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: 'black',
        borderColor: '#7dd8d2',
      },
    ],
  };
  return (
    <>
      <Row className="line-chart-header">
        <Typography.Title level={2} className="chart-headers">
          {coinName} Price Chart
        </Typography.Title>
        <Col className="chart-container">
          <Typography.Title level={5} className="chart-headers">
            Changed {coinHistory?.data?.change}%
          </Typography.Title>
          <Typography.Title level={5} className="chart-headers">
            Current {coinName} Price: $ {currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line data={data}  />
    </>
  );
};

export default LineChart;