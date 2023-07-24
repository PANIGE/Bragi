import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DonutChart = () => {
  const options = {
    chart: {
      type: 'pie',
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      height: '50%', // Adjust the height to make it a semi-circle
    },
    credits: {
        enabled: false,
    },
    title: {
      text: 'Mes projets',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>',
    },
    plotOptions: {
      pie: {
        innerSize: '50%', // Adjust the inner size to create the donut shape
        slicedOffset: 20,
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y}',
        },
      },
    },
    series: [
      {
        name: 'Value',
        colorByPoint: true,
        data: [
          { name: 'en cours', y: 1 },
          { name: 'terminé', y: 1 },
          { name: 'à venir', y: 1 },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DonutChart;