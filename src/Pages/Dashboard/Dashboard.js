import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Dashboard.style.scss";
import PieChartComponent from "./Components/PieChart";
import RangeBarGraphComponent from "./Components/RangeBarGraph";
import BankList from "./Components/BankList";
import VideoKycList from "./Components/VideoKycList";
import Carousel from "./Components/Carousel";

const Dashboard = () => {
  return (
    <Box className="dashboard-wrapper">
      <Typography
        variant="h6"
        component="div"
        color="black"
        padding="8px"
        style={{ fontWeight: "bold" }}
      >
        Welcome, Johan Paul
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={5} xs={12}>
          <PieChartComponent />
        </Grid>
        <Grid item md={7} xs={12}>
          <RangeBarGraphComponent />
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={3}>
        <Grid item md={8} xs={12}>
          <BankList />
          <Carousel />
        </Grid>
        <Grid item md={4} xs={12}>
          <VideoKycList />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Dashboard;
