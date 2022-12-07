import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header/Header";
import { Grid, Box, CircularProgress } from "@mui/material";
import { axiosRequest } from "../components/api/api";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const productsEndpoint = `8005/overall_rating`;

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loader, setLoader] = useState(true);
  const [overallRating, setOverallRating] = useState({
    proudctsName: [],
    proudctsQualityRating: [],
    proudctsUtilityRating: [],
    proudctsAvailabilityRating: [],
    proudctsOverallRating: [],
  });
  useEffect(() => {
    getOverallRating();
  }, []);

  async function getOverallRating() {
    try {
      const response = await axiosRequest(
        "get",
        productsEndpoint,
        undefined,
        undefined
      );

      const _overAllRating = {};
      _overAllRating.proudctsName = response.data.map(
        (product) => product.title
      );
      _overAllRating.proudctsQualityRating = response.data.map(
        (product) => product.quality_rating
      );
      _overAllRating.proudctsUtilityRating = response.data.map(
        (product) => product.utility_rating
      );
      _overAllRating.proudctsAvailabilityRating = response.data.map(
        (product) => product.availability_rating
      );
      _overAllRating.proudctsOverallRating = response.data.map(
        (product) => product.overall_rating
      );
      setOverallRating(_overAllRating);
      setLoader(false);
    } catch (error) {
      alert("Something went wrong please try again later.");
    }
  }
  const columnChartOptions = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    title: {
      text: "Overall Rating",
      align: "left",
    },
    colors: ["#FFB82C", "#00B65E", "#00CBCB", "#3F4CEC"],
    xaxis: {
      categories: overallRating.proudctsName,
      labels: {
        rotateAlways: true,
        hideOverlappingLabels: false,
        trim: true,
      },
    },
    yaxis: {
      title: {},
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {},
    },
  };
  const lineChartOptions1 = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [2],
    },
    markers: {
      colors: "#FFFFFF",
      strokeColors: "#3F4CEC",
      size: 5,
    },
    title: {
      text: "Product Utility",
      align: "left",
    },
    colors: ["#3F4CEC"],
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: overallRating.proudctsName,
      labels: {
        rotateAlways: true,
        trim: true,
        hideOverlappingLabels: false,
      },
    },
    tooltip: {
      y: {},
    },
  };
  const lineChartOptions2 = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [2],
    },
    markers: {
      colors: "#FFFFFF",
      strokeColors: "#00B65E",
      size: 5,
    },
    title: {
      text: "Product Quality",
      align: "left",
    },
    colors: ["#00B65E"],
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: overallRating.proudctsName,
      labels: {
        rotateAlways: true,
        hideOverlappingLabels: false,
        trim: true,
      },
    },
  };
  const columnChartSeries = [
    {
      name: "Rating",
      data: overallRating?.proudctsOverallRating,
    },
    {
      name: "Qualtity",
      data: overallRating?.proudctsQualityRating,
    },
    {
      name: "Availability",
      data: overallRating?.proudctsAvailabilityRating,
    },
    {
      name: "Utility",
      data: overallRating?.proudctsUtilityRating,
    },
  ];
  const lineChartSeries1 = [
    {
      name: "Product Utility",
      data: overallRating?.proudctsUtilityRating,
    },
  ];
  const lineChartSeries2 = [
    {
      name: "Product Quality",
      data: overallRating?.proudctsQualityRating,
    },
  ];
  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setStartQueryParam={() => {}}
      />
      {loader ? (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
          <CircularProgress sx={{ color: "#00B65E" }} />
        </Box>
      ) : (
        <Grid container>
          <Grid item xs={12} paddingBottom={5} sx={{}}>
            <Chart
              options={columnChartOptions}
              series={columnChartSeries}
              type="bar"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Chart
              options={lineChartOptions1}
              series={lineChartSeries1}
              type="line"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Chart
              options={lineChartOptions2}
              series={lineChartSeries2}
              type="line"
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Dashboard;
