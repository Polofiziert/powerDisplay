const totalI_data = [

  ];
  const I1_data = [

  ];
  const I2_data = [

  ];
  const I3_data = [

  ];

const U12_data = [
    
  ];
  const U23_data = [

  ];
  const U31_data = [

  ];
  const U1N_data = [

  ];
  const U2N_data = [

  ];
  const U3N_data = [

  ];


function addData(chart, label, newData) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset, index) => {
        dataset.data.push(newData[index]);
    });
    chart.update();
}

function shiftData(chart) {
  chart.data.labels.shift();
  chart.data.datasets.forEach((dataset) => {
      dataset.data.shift();
  });
  chart.update();
}

var powerChart =  new Chart(
    document.getElementById('powerChart'),
    {
      type: 'line',
      options: {
        animation: false,
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        }
      },      
      data: {
        labels: totalI_data.map(row => row.time),
        datasets: [
          {
            label: 'I',
            data: totalI_data.map(row => row.I),
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: false,
          },
          {
            label: 'I1',
            data: I1_data.map(row => row.I),
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: false,
          },
          {
            label: 'I2',
            data: I2_data.map(row => row.I),
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: false,
          },
          {
            label: 'I3',
            data: I3_data.map(row => row.I),
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: false,          }
        ]
      },
      scales: {
        x: {
          type: 'time',
          display: false,
          title: {
            display: true,
            text: 'Date'
          },
        },
        y: {
          title: {
            display: true,
            text: 'I in A'
          }
        }
      },
    }
  );

  var voltageU123Chart =  new Chart(
    document.getElementById('voltageU123Chart'),
    {
      type: 'line',
      options: {
        animation: false,
        responsive: true,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          }
        }
      },      
      data: {
        labels: U12_data.map(row => row.time),  
        datasets: [
          {
            label: 'U12',
            data: U12_data.map(row => row.U),
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: false,
          },
          {
            label: 'U23',
            data: U23_data.map(row => row.U),
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: false,
          },
          {
            label: 'U31',
            data: U31_data.map(row => row.U),
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: false,
          },
          {
            label: 'U1N',
            data: U1N_data.map(row => row.U),
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: false,
            hidden: true,
          },
          {
            label: 'U2N',
            data: U2N_data.map(row => row.U),
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: false,
            hidden: true,
          },
          {
            label: 'U3N',
            data: U3N_data.map(row => row.U),
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: false,
            hidden: true,
          }
        ]
      },
      scales: {
        x: {
          type: 'time',
          display: false,
          title: {
            display: true,
            text: 'Date'
          },
        },
        y: {
          title: {
            display: true,
            text: 'U in V'
          }
        }
      },
    }
  );