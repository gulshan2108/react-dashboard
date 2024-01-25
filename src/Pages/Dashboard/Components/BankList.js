import { Box, Button, Card, Grid } from "@mui/material";
import React from "react";
import utkarshlogo from "../../../Assets/images/small-logo.png";
import bajajLogo from "../../../Assets/images/bajaj.png";
import shriramLogo from "../../../Assets/images/shriram.png";
import mahindraLogo from "../../../Assets/images/mahindra.png";
import checkIcon from "../../../Assets/images/check-circle.svg";
const data = [
  {
    logo: utkarshlogo,
    name: "Utkarsh Small Finance Bank",
    label1: "Highest Interest Rate",
    label2: "RBI Insured",
    interestRate: "9.10%",
    cardColor: "small-finance",
  },
  {
    logo: mahindraLogo,
    name: "Bajaj Finserv",
    label1: "Crisil AAA Rated",
    label2: "No Video KYC required",
    interestRate: "8.80% p.a",
    cardColor: "bajaj-finance",
  },
  {
    logo: shriramLogo,
    name: "Shriram Finance",
    label1: "Crisil AAA Rated",
    label2: "No Video KYC required",
    interestRate: "8.80% p.a",
    cardColor: "shriram-finance",
  },
  {
    logo: bajajLogo,
    name: "Mahindra Finance",
    label1: "Crisil AAA Rated",
    label2: "No Video KYC required",
    interestRate: "8.80% p.a",
    cardColor: "mahindra-finance",
  },
];
const BankList = () => {
  return (
    <Grid container spacing={2}>
      {data?.map((item, index) => {
        return (
          <Grid item md={6} xs={12} key={index}>
            <Card className={`bank-info-wrapper ${item.cardColor}`}>
              <Box className="head">
                <img src={item.logo} alt="small-Logo" />
                <h2>{item.name}</h2>
              </Box>
              <Box className="points">
                <Box className="point-box">
                  <img src={checkIcon} alt="small-Logo" />
                  <span>{item.label1}</span>
                </Box>
                <Box className="point-box">
                  <img src={checkIcon} alt="small-Logo" />
                  <span>{item.label2}d</span>
                </Box>
              </Box>
              <Box className="points">
                <Grid container className="points-wrapper">
                  <Grid item md={7} xs={6}>
                    <Box className="point-box3">
                      <div>Interest Upto</div>
                      <div>{item.interestRate}</div>
                    </Box>
                  </Grid>
                  <Grid item md={5} xs={6}>
                    <Box className="point-box4">
                      <Button variant="contained">Book Now</Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default BankList;
