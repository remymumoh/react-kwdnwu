import React, { useState } from "react";
import { render } from "react-dom";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import drilldown from "highcharts/modules/drilldown.js";

drilldown(Highcharts);

const LineChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "column",
      events: {
        drilldown: function(e) {
          console.log(e.seriesOptions)
          if (!e.seriesOptions) {
            var chart = this,
              drilldowns = {
                Animals: {
                  name: "Animals",
                  color: "#3150b4",
                  data: [["Cows", 2], ["Sheep", 3]]
                },
                Fruits: {
                  name: "Fruits",
                  color: "#3150b4",
                  data: [["Oranges", 3], ["Bananas", 2]]
                }
              },
              drilldowns2 = {
                Animals: {
                  name: "Animals",
                  color: "#50B432",
                  data: [
                    {
                      name: "Cows",
                      y: 6,
                      drilldown: true
                    },
                    {
                      name: "Goats",
                      y: 1,
                      drilldown: true
                    },
                    {
                      name: "Sheep",
                      y: 1,
                      drilldown: true
                    }
                  ]
                },
                Fruits: {
                  name: "Fruits",
                  color: "#50B432",
                  data: [
                    {
                      name: "Oranges",
                      y: 6,
                      drilldown: true
                    },
                    {
                      name: "Bananas",
                      y: 1,
                      drilldown: true
                    }
                  ]
                }
              },
              drilldowns3 = {
                Cows: {
                  name: "Cows",
                  color: "#50B432",
                  data: [
                    {
                      name: "Freshian",
                      y: 6,
                      drilldown: false
                    },
                    {
                      name: "Azure",
                      y: 1,
                      drilldown: false
                    },
                    {
                      name: "Zebu",
                      y: 1,
                      drilldown: false
                    }
                  ]
                },
              },
              drilldown4 = {
                Sheep: {
                  name: "Sheep",
                  color: "#50B432",
                  data: [
                    {
                      name: "Woolen",
                      y: 6,
                      drilldown: false
                    },
                    {
                      name: "polen",
                      y: 1,
                      drilldown: false
                    },
                    {
                      name: "What",
                      y: 1,
                      drilldown: false
                    }
                  ]
                },
              },
              series = drilldowns[e.point.name],
              series2 = drilldowns2[e.point.name],
              series4 = drilldown4[e.point.name],
              series3 = drilldowns3[e.point.name];
            chart.addSingleSeriesAsDrilldown(e.point, series);
            chart.addSingleSeriesAsDrilldown(e.point, series3);
            chart.addSingleSeriesAsDrilldown(e.point, series4);
            chart.addSingleSeriesAsDrilldown(e.point, series2);
            chart.applyDrilldown();
          }
        }
      }
    },
    title: {
      text: "Async drilldown"
    },
    xAxis: {
      type: "category"
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      column: {
        stacking: "normal"
      },
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          style: {
            textShadow: false,
            fontSize: "1vw"
          }
        }
      }
    },
    series: [
      {
        name: "Things",
        color: "#3150b4",
        data: [
          {
            name: "Animals",
            y: 5,
            drilldown: true
          },
          {
            name: "Fruits",
            y: 5,
            drilldown: true
          }
        ]
      },
      {
        name: "MyThings",
        color: "#50B432",
        data: [
          {
            name: "Animals",
            y: 15,
            drilldown: 'sad'
          },
          {
            name: "Fruits",
            y: 7,
            drilldown: 'dsa'
          }
        ]
      }
    ],
    drilldown: {
      series: []
    }
  });

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

render(<LineChart />, document.getElementById("root"));
