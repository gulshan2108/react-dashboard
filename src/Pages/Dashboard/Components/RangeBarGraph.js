import { Card, CardContent } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";
import moment from "moment";

const data = {
  series: [
    {
      data: [
        {
          x: "Utkarsh FD1",
          y: [0, 7],
          fillColor: "#008FFB",
        },
        {
          x: "Sriram FD plan 2",
          y: [0, 15],
          fillColor: "#00E396",
        },
        {
          x: "Bajaj Finserv FD 1",
          y: [4, 15],
          fillColor: "#775DD0",
        },
        {
          x: "Mahindra FD Plan2",
          y: [5, 29],
          fillColor: "#FEB019",
        },
      ],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false, // Set this to false to hide the toolbar
      },
      type: "rangeBar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: false,
        },
        barHeight: 20,
        borderRadius: "50px",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        var label = opts.w.globals.labels[opts.dataPointIndex];
        var startMonth = moment().month(val[0]);
        var endMonth = moment().month(val[1]);
        var diff = endMonth.diff(startMonth, "months");
        return label + ": " + diff + (diff > 1 ? " months" : " month");
      },
      style: {
        colors: ["#f3f4f5", "#fff"],
      },
    },
    xaxis: {
      categories: [],
    },
    yaxis: {
      show: false,
    },
    grid: {
      row: {
        colors: ["#f3f4f5", "#fff"],
        opacity: 1,
      },
    },
  },
};

const RangeBarGraphComponent = () => {
  return (
    <Card>
      <CardContent>
        <div id="chart">
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="rangeBar"
            height={290}
          />
        </div>
        <div id="html-dist"></div>
      </CardContent>
    </Card>
  );
};
export default RangeBarGraphComponent;
