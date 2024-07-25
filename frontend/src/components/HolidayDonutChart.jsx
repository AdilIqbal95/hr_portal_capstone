import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Container} from 'react-bootstrap';


// Register the necessary chart components
Chart.register(ArcElement, Tooltip, Legend);

function HolidayDonutChart({ totalHolidays, usedHolidays }) {
  const remainingHolidays = totalHolidays - usedHolidays;

  const data = {
    labels: ['Used Holidays', 'Remaining Holidays'],
    datasets: [
      {
        data: [usedHolidays, remainingHolidays],
        backgroundColor: ['#FFA500', '#00BFFF'],
      },
    ],
  };


  const options = {
    cutout: '70%', // Make the doughnut thinner
    responsive: true,
    plugins: {
        legend: {
            display: true,
        },
        
    },
};
  return (
    <Container>
        <h3>Holidays remaining:</h3>
    <div className="holiday-donut-chart" style={{ position: 'relative', width: '100%', height: '300px' }}>
        <Doughnut data={data} options={options} />
        <div className="holiday-donut-chart-labels">
     </div>
    </div>

    </Container>
  );
}

export default HolidayDonutChart;