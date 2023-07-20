// import React from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// const DonutChart = () => {
//   const options = {
//     chart: {
//       type: 'pie',
//       plotBackgroundColor: null,
//       plotBorderWidth: null,
//       plotShadow: false,
//       height: '50%', // Adjust the height to make it a semi-circle
//     },
//     title: {
//       text: 'Donut Chart',
//     },
//     tooltip: {
//       pointFormat: '{series.name}: <b>{point.y}</b>',
//     },
//     plotOptions: {
//       pie: {
//         innerSize: '50%', // Adjust the inner size to create the donut shape
//         slicedOffset: 20,
//         dataLabels: {
//           enabled: true,
//           format: '<b>{point.name}</b>: {point.y}',
//         },
//       },
//     },
//     series: [
//       {
//         name: 'Value',
//         colorByPoint: true,
//         data: [
//           { name: 'Value 1', y: 10 },
//           { name: 'Value 2', y: 20 },
//           { name: 'Value 3', y: 30 },
//         ],
//       },
//     ],
//   };

//   return <HighchartsReact highcharts={Highcharts} options={options} />;
// };

// export default DonutChart;