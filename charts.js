//---------------------------------------------------Graph for GDP per Capita------------------------------------------------------
var context = document.getElementById('barChart').getContext('2d');

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels = [
  72715, 65295, 58578, 50349, 50277,
  44284, 43920, 40077, 39395, 38177
];
const ylabels = [
  "AB", "SK", "NL", "ON", "BC",
  "MA", "QC", "NB", "NS", "PE"
];

// setup
const data = {
  labels: ylabels,
  datasets: [
    {
      label: "GDP Per Capita",
      data: xlabels,
      backgroundColor: ["rgb(45, 73, 36)",
        "rgb(45, 73, 36)",
        "rgb(45, 73, 36)",
        "rgb(45, 73, 36)",
        "rgb(45, 73, 36)",
        "rgb(45, 73, 36)",
        "rgb(45, 73, 36)",
        "rgb(100, 0, 0)",
        "rgb(45, 73, 36)",
        "rgb(45, 73, 36)"]
    },
  ],
}
//config
const config = {
  type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data,
  options: {
    legend: {
      display: false,
    },
    indexAxis: 'y',
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 7,
          maxRotation: 0,
        },
        grid: {
          display: true
        },
        ticks: {
          callback: function (value, index, ticks) {
            return "$" + " " + value;
          },
        },
      },
      y: {
        ticks: {
          autoSkip: false
        },
        grid: {
          display: false
        }

      }

    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Province:" + " " + context[0].label;
          }
        }
      },
      legend: {
        display: false,
      },
    },
  },
};

//render init block
const barChart = new Chart(
  document.getElementById("barChart").getContext("2d"),
  config);

//-------------------------------------------------Graph for Real GDP Growth Rate (NB vs Canda)------------------------------------------------ 

var context = document.getElementById("myChart1").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels1 = [
  2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013,
  2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021
];
const ylabels1 = [
  4.75, 2.20, 2.82, 0.97, 1.79, 0.61,
  0.87, -1.41, 2.09, 0.21, -1.19, -0.34,
  0.08, 0.81, 0.92, 2.36, 1.33, 1.21, -3.11, 5.25
];
const ylabels3 = [
  3.26, 2.00, 3.33, 3.15, 2.76, 2.02,
  0.84, -3.14, 3.27, 3.24, 1.86, 2.55,
  2.87, 0.80, 0.97, 3.12, 2.85, 1.73, -5.26, 4.78
];


// setup
const data1 = {
  labels: xlabels1,
  datasets: [
    {
      label: "New Brunswick",
      data: ylabels1,
      borderColor: "rgb(45, 73, 36)",
      backgroundColor: "rgb(45, 73, 36)",
      borderWidth: 3,
      pointRadius: 1,
    },
    {
      label: "Canada",
      data: ylabels3,
      borderColor: "rgb(100, 0, 0)",
      backgroundColor: "rgb(100, 0, 0)",
      borderWidth: 3,
      pointRadius: 1,
    }
  ],
}


//config
const config1 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data1,
  options: {
    legend: {
      display: false,
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 7,
          maxRotation: 0,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 6,
        min: -6,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          stepSize: 3,
          callback: function (value, index, ticks) {
            return value + " " + "%";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Year" + " " + context[0].label;
          },
        },
      },
      maintainAspectRatio: true,
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        },
      },
    },
  },
};

//render init block
const myChart1 = new Chart(
  document.getElementById("myChart1").getContext("2d"),
  config1
);

// -----------------------------------------------Graph of Debt-to-GDP Ratio----------------------------------------------------------------------
var context = document.getElementById("myChart2").getContext("2d")

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels4 = [
  2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013,
  2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021
];
const ylabels4 = [
  31.2, 30.6, 28.4, 27.0, 25.1, 25.0,
  26.2, 26.2, 29.6, 31.8, 31.9, 34.8,
  36.6, 40.5, 40.9, 40.0, 38.6, 37.4, 36.6, 36, 5.25
];
const ylabels5 = [
  30.0, 30.0, 30.0, 30.0, 30.0, 30.0,
  30.0, 30.0, 30.0, 30.0, 30.0, 30.0,
  30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0
];


// setup
const data2 = {
  labels: xlabels4,
  datasets: [
    {
      label: "Debt-to-GDP Ratio",
      data: ylabels4,
      borderColor: "rgb(45, 73, 36)",
      backgroundColor: "rgb(45, 73, 36)",
      borderWidth: 3,
      pointRadius: 1,
    },
    {
      label: "Goal",
      data: ylabels5,
      borderColor: "rgb(100, 0, 0)",
      backgroundColor: "rgb(100, 0, 0)",
      borderWidth: 3,
      pointRadius: 0,
      borderDash: [10, 5]
    },
  ],
}


//config
const config2 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data2,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 7,
          maxRotation: 0,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 45,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          stepSize: 9,
          callback: function (value, index, ticks) {
            return value + " " + "%";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Year" + " " + context[0].label;
          },
        },
      },
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        },
      },
    },
  },
};

//render init block
const myChart2 = new Chart(
  document.getElementById("myChart2").getContext("2d"),
  config2
);

// -----------------------------------------------Population Graph 1---------------------------------------------------------------------------
var context = document.getElementById("myChart3").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels6 = [
  "Q1 2002", "Q2 2002", "Q3 2002", "Q4 2002", "Q1 2003", "Q2 2003", "Q3 2003", "Q4 2003",
  "Q1 2004", "Q2 2004", "Q3 2004", "Q4 2004", "Q1 2005", "Q2 2005", "Q3 2005", "Q4 2005",
  "Q1 2006", "Q2 2006", "Q3 2006", "Q4 2006", "Q1 2007", "Q2 2007", "Q3 2007", "Q4 2007",
  "Q1 2008", "Q2 2008", "Q3 2008", "Q4 2008", "Q1 2009", "Q2 2009", "Q3 2009", "Q4 2009",
  "Q1 2010", "Q2 2010", "Q3 2010", "Q4 2010", "Q1 2011", "Q2 2011", "Q3 2011", "Q4 2011",
  "Q1 2012", "Q2 2012", "Q3 2012", "Q4 2012", "Q1 2013", "Q2 2013", "Q3 2013", "Q4 2013",
  "Q1 2014", "Q2 2014", "Q3 2014", "Q4 2014", "Q1 2015", "Q2 2015", "Q3 2015", "Q4 2015",
  "Q1 2016", "Q2 2016", "Q3 2016", "Q4 2016", "Q1 2017", "Q2 2017", "Q3 2017", "Q4 2017",
  "Q1 2018", "Q2 2018", "Q3 2018", "Q4 2018", "Q1 2019", "Q2 2019", "Q3 2019", "Q4 2019",
  "Q1 2020", "Q2 2020", "Q3 2020", "Q4 2020", "Q1 2021", "Q2 2021", "Q3 2021", "Q4 2021",
  "Q1 2022", "Q2 2022"
];
const ylabels6 = [
  1.12, 1.11, 1.09, 1.04, 1.00, 0.95, 0.91, 0.91,
  0.94, 0.94, 0.94, 0.95, 0.94, 0.93, 0.95, 0.98,
  0.99, 1.02, 1.02, 1.01, 1.00, 0.97, 0.98, 0.98,
  1.02, 1.04, 1.09, 1.12, 1.14, 1.16, 1.15, 1.15,
  1.14, 1.13, 1.12, 1.11, 1.06, 1.01, 0.98, 0.96,
  1.03, 1.06, 1.09, 1.10, 1.06, 1.06, 1.06, 1.08,
  1.05, 1.05, 1.01, 0.99, 0.92, 0.81, 0.75, 0.74,
  0.83, 1.01, 1.14, 1.22, 1.23, 1.19, 1.21, 1.28,
  1.33, 1.37, 1.42, 1.44, 1.43, 1.42, 1.45, 1.51,
  1.56, 1.54, 1.16, 0.59, 0.42, 0.40, 0.55, 1.06,
  1.20, 1.31,

];
const ylabels7 = [
  -0.14, -0.13, -0.06, 0.02, 0.08, 0.07, 0.01, 0.01,
  -0.01, 0.01, 0.00, -0.03, -0.03, -0.09, -0.18, -0.21,
  -0.27, -0.31, -0.33, -0.36, -0.29, -0.19, -0.03, 0.16,
  0.19, 0.21, 0.19, 0.22, 0.28, 0.35, 0.41, 0.44,
  0.39, 0.38, 0.41, 0.43, 0.47, 0.37, 0.35, 0.28,
  0.33, 0.32, 0.35, 0.30, 0.13, 0.11, 0.02, 0.00,
  0.09, 0.10, 0.06, 0.11, 0.08, 0.01, -0.02, 0.03,
  0.13, 0.44, 0.59, 0.67, 0.53, 0.33, 0.43, 0.40,
  0.44, 0.48, 0.48, 0.61, 0.63, 0.72, 0.89, 1.04,
  1.02, 1.05, 0.78, 0.34, 0.44, 0.46, 0.77, 1.41,
  1.65, 1.84
];


// setup
const data3 = {
  labels: xlabels6,
  datasets: [
    {
      label: "Canada",
      data: ylabels6,
      borderColor: "rgb(45, 73, 36)",
      backgroundColor: "rgb(45, 73, 36)",
      borderWidth: 3,
      pointRadius: 0,
    },
    {
      label: "New Brunswick",
      data: ylabels7,
      borderColor: "rgb(100, 0, 0)",
      backgroundColor: "rgb(100, 0, 0)",
      borderWidth: 3,
      pointRadius: 0,
    },
  ],
}


//config
const config3 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data3,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          maxRotation: 100,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 2,
        min: -2,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          stepSize: 9,
          callback: function (value, index, ticks) {
            return value + " " + "%";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Year" + " " + context[0].label;
          },
        },
      },
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        },
      },
    },
  },
};

//render init block
const myChart3 = new Chart(
  document.getElementById("myChart3").getContext("2d"),
  config3
);

// -----------------------------------------------Migration Graph---------------------------------------------------------------------------
var context = document.getElementById("myChart4").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels7 = [
  2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013,
  2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021
];
const ylabels8 = [
  906, 923, 699, 683, 882, 933,
  810, 1092, 1084, 673, 888, 398,
  432, -656, -307, -801, -1190, -1260,
  -1354, -1782
];
const ylabels9 = [
  400, 524, 576, 565, 674, 1801,
  1832, 2514, 1714, 2230, 2369, 1840,
  2298, 2093, 4880, 3638, 4389, 6418,
  5604, 3916
];

const ylabels10 = [
  -1218, -843, -760, -2074, -3487, -2632,
  -908, -237, 571, -158, -1806, -3290,
  -3517, -2790, -1113, 434, 481, 1669,
  1826, 3887
];


// setup
const data4 = {
  labels: xlabels7,
  datasets: [
    {
      label: "Natural Change",
      data: ylabels8,
      borderColor: "rgb(45, 73, 36)",
      backgroundColor: "rgb(45, 73, 36)",
      borderWidth: 3,
      pointRadius: 0.25,
    },
    {
      label: "Net International Migration",
      data: ylabels9,
      borderColor: "rgb(100, 0, 0)",
      backgroundColor: "rgb(100, 0, 0)",
      borderWidth: 3,
      pointRadius: 0.25,
    },
    {
      label: "Net Interprovincial Migration",
      data: ylabels10,
      borderColor: "rgb(0, 0, 100)",
      backgroundColor: "rgb(0, 0, 100)",
      borderWidth: 3,
      pointRadius: 0.25,
    }

  ],
}


//config
const config4 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data4,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 7000,
        min: -4000,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          stepSize: 1000,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Province:" + " " + context[0].label;
          },
        },
      },
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        },
      },
    },
  },
};

//render init block
const myChart4 = new Chart(
  document.getElementById("myChart4").getContext("2d"),
  config4
);



// -----------------------------------------------Province Age Graph---------------------------------------------------------------------------
var context = document.getElementById("myChart5").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels8 = [
  "CA", "NL", "PEI", "NS", "NB",
  "QC", "ON", "MA", "SK", "AB",
  "BC", "YT", "NT", "NU"
];
const ylabels11 = [
  41.1, 47.8, 42.4, 45, 46.2,
  43, 40.7, 37.8, 38.1, 37.9,
  42.3, 39.3, 35.8, 26.5

];
const ylabels12 = [
  41.7, 45.2, 42.4, 44, 44.5,
  42.8, 41.5, 39.3, 39.4, 38.9,
  42.8, 39.7, 36.4, 28.9
];


// setup
const data5 = {
  labels: xlabels8,
  datasets: [
    {
      label: "Median Age",
      data: ylabels11,
      backgroundColor: "rgb(45, 73, 36)",
    },
    {
      label: "Average Age",
      data: ylabels12,
      backgroundColor: "rgb(100, 0, 0)",
    },
  ],
}


//config
const config5 = {
  type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data5,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 50,
        min: 0,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          stepSize: 10,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Province:" + " " + context[0].label;
          },
        },
      },
      legend: {
        display: true,
        labels: {
          boxWidth: 20
        },
      },
    },
  },
};

//render init block
const myChart5 = new Chart(
  document.getElementById("myChart5").getContext("2d"),
  config5
);

// -----------------------------------------------Trade Balance Graph---------------------------------------------------------------------------
var context = document.getElementById("myChart6").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels9 = [
  2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013,
  2014, 2015, 2016, 2017, 2018, 2019,
  2020
];

const ylabels13 = [
  -2489, -2657, -2590, -3030, -4309, -4796,
  -6318, -5936, -6019, -6075, -5532, -5745,
  -6043, -5498, -5641, -6203, -6585, -6232,
  -6385

];
const ylabels14 = [
  -2841, -3457, -3360, -3190, -3770, -4694,
  -5154, -2530, -2981, -2106, -1543, -740,
  -1259, -1191, -784, -747, -378, -89,
  -1212
];
const ylabels15 = [
  352, 801, 770, 160, -539, -102,
  -1164, -3406, -3038, -3969, -3989, -5005,
  -4784, -4307, -4857, -5457, -6207, -6142,
  -5173
];



// setup
const data6 = {
  labels: xlabels9,
  datasets: [
    {
      label: "Total",
      data: ylabels13,
      backgroundColor: "rgb(45, 73, 36)"
    },
    {
      label: "Provincial",
      data: ylabels14,
      backgroundColor: "rgb(100, 0, 0)"
    },
    {
      label: "International",
      data: ylabels15,
      backgroundColor: "rgb(0, 0, 100)"
    }
  ],
}


//config
const config6 = {
  type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data6,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 2000,
        min: -7000,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Year:" + " " + context[0].label;
          },
        },
      },
      legend: {
        align: "center",
        display: true,
        labels: {
          boxWidth: 20
        }
      },
    },
  },
};

//render init block
const myChart6 = new Chart(
  document.getElementById("myChart6").getContext("2d"),
  config6
);

// -----------------------------------------------Imports and Exports---------------------------------------------------------------------------
var context = document.getElementById("myChart7").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels10 = [
  2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013,
  2014, 2015, 2016, 2017, 2018, 2019,
  2020
];

const ylabels16 = [
  22.2, 22.3, 24.0, 25.6, 25.3, 27.3,
  29.2, 24.5, 27.6, 30.0, 29.2, 29.9,
  28.0, 26.8, 25.2, 26.9, 26.5, 26.8,
  22.5

];
const ylabels17 = [
  24.7, 24.9, 26.6, 28.6, 29.6, 32.1,
  35.5, 30.5, 33.6, 36.1, 34.8, 35.6,
  34.0, 32.3, 30.8, 33.1, 33.1, 33.0,
  28.9
];

// setup
const data7 = {
  labels: xlabels10,
  datasets: [
    {
      label: "Imports",
      data: ylabels16,
      borderColor: "rgb(45, 73, 36)",
      backgroundColor: "rgb(45, 73, 36)",
      borderWidth: 3,
      pointRadius: 1.0
    },
    {
      label: "Exports",
      data: ylabels17,
      borderColor: "rgb(100, 0, 0)",
      backgroundColor: "rgb(100,0,0)",
      borderWidth: 3,
      pointRadius: 1.0
    }
  ]
}


//config
const config7 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data7,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 40,
        min: 0,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          callback: function (value, index, ticks) {
            return "$" + " " + value;
          },
        },
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Year: " + " " + context[0].label;
          },
        },
      },
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        }
      },
    },
  },
};

//render init block
const myChart7 = new Chart(
  document.getElementById("myChart7").getContext("2d"),
  config7
);

// -----------------------------------------------No. of Exporting Firms-------------------------------------------------------------------------
var context = document.getElementById("myChart8").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels11 = [
  2005, 2006, 2007, 2008, 2009, 2010,
  2011, 2012, 2013, 2014, 2015, 2016,
  2017, 2018, 2019, 2020, 2021
];

const ylabels18 = [
  928, 943, 883, 874, 797, 766,
  760, 765, 735, 718, 735, 728,
  775, 786, 777, 772, 798
];


// setup
const data8 = {
  labels: xlabels11,
  datasets: [
    {
      label: "Number of Firms Exporting",
      data: ylabels18,
      borderColor: "rgb(45, 73, 36)",
      backgroundColor: "rgb(45, 73, 36)",
      borderWidth: 3,
      pointRadius: 1.0
    }
  ]
}


//config
const config8 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data8,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        max: 1000,
        min: 600,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        }
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Year: " + " " + context[0].label;
          },
        },
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        }
      },
    },
  },
};

//render init block
const myChart8 = new Chart(
  document.getElementById("myChart8").getContext("2d"),
  config8
);
// -----------------------------------------------Forestry---------------------------------------------------------------------------
var context = document.getElementById("myChart9").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels12 = [
  2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013,
  2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021
];

const ylabels19 = [
  1.47, 1.54, 1.73, 1.26, 1.14, 1.10,
  1.02, 0.875, 1.02, 1.00, 0.96, 1.07,
  1.14, 1.24, 1.33, 1.27, 1.23, 1.23,
  1.19, 1.25
];

// setup
const data9 = {
  labels: xlabels12,
  datasets: [
    {
      label: "Total International Export Value",
      data: ylabels19,
      borderColor: "rgb(45, 73, 36)",
      backgroundColor: "rgb(45, 73, 36)",
      borderWidth: 3,
      pointRadius: 1.0
    }
  ]
}


//config
const config9 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data9,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        max: 1.8,
        min: 0.6,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          callback: function (value, index, ticks) {
            return "$" + " " + value;
          },
        },
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Year: " + " " + context[0].label;
          },
        },
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        }
      },
    },
  },
};

//render init block
const myChart9 = new Chart(
  document.getElementById("myChart9").getContext("2d"),
  config9
);

// -----------------------------------------------Mining---------------------------------------------------------------------------
var context = document.getElementById("myChart10").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels13 = [
  2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013,
  2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021
];

const ylabels20 = [
 0.96, 0.96, 0.92, 0.84, 1.22, 1.17,
 1.28, 0.81, 0.88, 0.86, 0.79, 0.48,
 0.36, 0.46, 0.37, 0.40, 0.37, 0.31,
 0.26, 0.24
];

// setup
const data10 = {
  labels: xlabels13,
  datasets: [
    {
      label: "Total International Export Value",
      data: ylabels20,
      borderColor: "rgb(45, 73, 36)",
      backgroundColor: "rgb(45, 73, 36)",
      borderWidth: 3,
      pointRadius: 1.0
    }
  ]
}


//config
const config10 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data10,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        max: 1.4,
        min: 0.0,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          callback: function (value, index, ticks) {
            return "$" + " " + value;
          },
        },
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Year: " + " " + context[0].label;
          },
        },
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        }
      },
    },
  },
};

//render init block
const myChart10 = new Chart(
  document.getElementById("myChart10").getContext("2d"),
  config10
);

// ---------------------------------------------Fisheries, and Agriculture----------------------------------------------------------------------
var context = document.getElementById("myChart11").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels14 = [
  2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013,
  2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021
];

const ylabels21 = [
  1.26, 1.09, 1.09, 1.08, 1.02, 0.87,
  0.99, 0.91, 0.95, 0.99, 1.08, 1.12,
  1.21, 1.54, 1.66, 1.72, 1.66, 1.70,
  1.38, 2.03
];

// setup
const data11 = {
  labels: xlabels14,
  datasets: [
    {
      label: "Total International Export Value",
      data: ylabels21,
      borderColor: "rgb(45, 73, 36)",
      backgroundColor: "rgb(45, 73, 36)",
      borderWidth: 3,
      pointRadius: 1.0
    }
  ]
}


//config
const config11 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data11,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        max: 2.1,
        min: 0.7,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          stepSize: 0.35,
          callback: function (value, index, ticks) {
            return "$" + " " + value;
          },
        },
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Year: " + " " + context[0].label;
          },
        },
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        }
      },
    },
  },
};

//render init block
const myChart11 = new Chart(
  document.getElementById("myChart11").getContext("2d"),
  config11
);

//-------------------------------------------R&D Expedentiture----------------------------------------------------------------------
var context = document.getElementById("myChart12").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels15 = [
  "CA","NL","PEI","NS","NB",
  "QC","ON","MA","SK","AB","BC"
];

const ylabels22 = [
  378, 669, 224, 412, 229,
  426, 387, 298, 310, 350, 335
];

// setup
const data12 = {
  labels: xlabels15,
  datasets: [
    {
      label: "Total R&D Expenditure Per Capita ",
      data: ylabels22,
      borderColor: "rgb(45, 73, 36)",
      backgroundColor: ["rgb(0, 0, 100)",
                        "rgb(45, 73, 36)",
                        "rgb(45, 73, 36)",
                        "rgb(45, 73, 36)",
                        "rgb(100, 0, 0)",
                        "rgb(45, 73, 36)",
                        "rgb(45, 73, 36)",
                        "rgb(45, 73, 36)",
                        "rgb(45, 73, 36)",
                        "rgb(45, 73, 36)",
                        "rgb(45, 73, 36)"],
      borderWidth: 0,
      pointRadius: 1.0
    }
  ]
}


//config
const config12 = {
  type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data12,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        max: 500,
        min: 100,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          callback: function (value, index, ticks) {
            return "$" + " " + value;
          },
        },
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Province: " + " " + context[0].label;
          },
        },
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        }
      },
    },
  },
};

//render init block
const myChart12 = new Chart(
  document.getElementById("myChart12").getContext("2d"),
  config12
);

//-------------------------------------------R&D Expedentiture----------------------------------------------------------------------
var context = document.getElementById("myChart12").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = 'Montserrat';
Chart.defaults.font.size = 12;
Chart.defaults.color = 'black';

const xlabels15 = [
  "CA", "NL", "PEI", "NS", "NB",
  "QC", "ON", "MA", "SK", "AB", "BC"
];

const ylabels22 = [
  378, 669, 224, 412, 229,
  426, 387, 298, 310, 350, 335
];

// setup
const data12 = {
  labels: xlabels15,
  datasets: [
    {
      label: "Total R&D Expenditure Per Capita ",
      data: ylabels22,
      borderColor: "rgb(45, 73, 36)",
      backgroundColor: ["rgb(0, 0, 100)",
        "rgb(45, 73, 36)",
        "rgb(45, 73, 36)",
        "rgb(45, 73, 36)",
        "rgb(100, 0, 0)",
        "rgb(45, 73, 36)",
        "rgb(45, 73, 36)",
        "rgb(45, 73, 36)",
        "rgb(45, 73, 36)",
        "rgb(45, 73, 36)",
        "rgb(45, 73, 36)"],
      borderWidth: 0,
      pointRadius: 1.0
    }
  ]
}


//config
const config12 = {
  type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data12,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        max: 500,
        min: 100,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          callback: function (value, index, ticks) {
            return "$" + " " + value;
          },
        },
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function (context) {
            console.log(context[0].label);
            return "Province: " + " " + context[0].label;
          },
        },
      },
      legend: {
        display: false,
        labels: {
          usePointStyle: true,
          pointStyle: 'line'
        }
      },
    },
  },
};

//render init block
const myChart12 = new Chart(
  document.getElementById("myChart12").getContext("2d"),
  config12
);


