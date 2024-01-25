import {
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const pieChartHeight = 50;
const data = {
  series: [25, 20, 15, 40],
  options: {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: [
      "Bajaj Finserve",
      "Sriram Finance",
      "Mahindra Finance",
      "Utkarsh Small Finance Bank",
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
const PieChartComponent = () => {
  const handleChange = () => {};
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={7} xs={6}>
            <Typography
              variant="h6"
              component="div"
              color="black"
              padding="8px"
              style={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Your FD Portfolio
            </Typography>
          </Grid>
          <Grid item md={5} xs={6}>
            <FormControl className="chart-dropdown">
              <InputLabel id="demo-simple-select-label">Deposit Amt</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={1}>200</MenuItem>
                <MenuItem value={2}>5000</MenuItem>
                <MenuItem value={3}>2500</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <div id="chart" className="apex-pie-chart">
          <ReactApexChart
            options={{
              ...data.options,
              chart: {
                ...data.options.chart,
                height: pieChartHeight,
              },
            }}
            series={data.series}
            type="pie"
            width={500}
          />
        </div>
        <div id="html-dist"></div>
      </CardContent>
    </Card>
  );
};
export default PieChartComponent;
