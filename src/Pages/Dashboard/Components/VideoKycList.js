import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";

const data = [
  {
    name: "Video KYC",
    scheduleName: "Scheduled On",
    scheduleDate: "28/10/2023",
    bankName: "Utkarsh SF Bank FD Plan 2",
    depostiAmount: "20,000",
    tenure: "2 Years",
    interestRate: "9.10%",
  },
  {
    name: "Pending Payment",
    scheduleName: "Pay By",
    scheduleDate: "30/10/2023",
    bankName: "Bajaj Finserv Corp FD 1",
    depostiAmount: "25,000",
    tenure: "18 Months",
    interestRate: "8.10%",
  },
  {
    name: "Upcoming FD Maturity",
    scheduleName: "Renew by",
    scheduleDate: "30/10/2023",
    bankName: "Shriram Finance Corp FD 1",
    depostiAmount: "25,000",
    tenure: "18 Months",
    interestRate: "8.10%",
  },
];

const VideoKycList = () => {
  return (
    <>
      {data?.map((item, index) => {
        return (
          <Card key={index} className="kyc-wrapper">
            <Box className="head">
              <h2>{item.name}</h2>
            </Box>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Typography variant="span">{item.scheduleName}</Typography>
                <Box className="date-wrapper">
                  <h3>28</h3>
                  <p>Oct, 2023</p>
                </Box>
              </Grid>
              <Grid item md={8}>
                <Typography variant="h5">{item.bankName}</Typography>
                <Grid container spacing={1}>
                  <Grid item md={4}>
                    <Typography variant="span">Deposit Amt</Typography>
                    <Typography variant="h5">{`RS. ${item.depostiAmount}`}</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography variant="span">Tennure</Typography>
                    <Typography variant="h5">{item.tenure}</Typography>
                  </Grid>
                  <Grid item md={4}>
                    <Typography variant="span">Interest Rate</Typography>
                    <Typography variant="h5">{item.interestRate}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        );
      })}
    </>
  );
};
export default VideoKycList;
