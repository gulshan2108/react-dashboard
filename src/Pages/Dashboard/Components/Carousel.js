import React from "react";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const slider = React.useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      name: "How FDs are taxed",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "Read more...",
    },
    {
      name: "How FDs are taxed",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "Read more...",
    },
    {
      name: "How FDs are taxed",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "Read more...",
    },
    {
      name: "How FDs are taxed",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "Read more...",
    },
    {
      name: "How FDs are taxed",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "Read more...",
    },
  ];

  return (
    <>
      <Grid container spacing={2} mt={4} mb={3} className="slider-wrapper">
        <Grid item md={8} xs={7}>
          <Typography variant="h6">Get Answer</Typography>
          <Typography variant="p">to all your questions</Typography>
        </Grid>
        <Grid item md={4} xs={5}>
          <Box className="slider-control">
            <button
              className="slider-prev"
              onClick={() => slider?.current?.slickPrev()}
            >
              <ArrowBackIosIcon />
            </button>
            <button
              className="slider-prev"
              onClick={() => slider?.current?.slickNext()}
            >
              <ArrowForwardIosIcon />
            </button>
          </Box>
        </Grid>
        <Grid item xs={12} spacing={2}>
          <Slider ref={slider} {...settings}>
            {data?.map((item, index) => {
              return (
                <Box>
                  <Card className="Faq-cards">
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="p">{item.detail}</Typography>
                    <Link>{item.link}</Link>
                  </Card>
                </Box>
              );
            })}
          </Slider>
        </Grid>
      </Grid>
    </>
  );
}

export default Carousel;
