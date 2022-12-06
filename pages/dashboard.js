import React from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header/Header";
<<<<<<< Updated upstream
import { Grid } from "@mui/material";
=======
import { Grid, Box, CircularProgress } from "@mui/material";
import { axiosRequest } from "../components/api/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

>>>>>>> Stashed changes

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard = () => {
<<<<<<< Updated upstream
=======
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
      setLoader(false)
    } catch (error) {
      alert("Something went wrong please try again later.");
    }
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const labels = overallRating?.proudctsName;
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: overallRating?.proudctsUtilityRating,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  /////////////////////////////
>>>>>>> Stashed changes
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
    },title: {
      text: "Overall Rating",
      align: "left",
    },colors:['#FFB82C', '#00B65E', '#00CBCB','#3F4CEC'],
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
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
      width: [2]
    },markers: {
      colors: '#FFFFFF',
      strokeColors: '#3F4CEC',
      size: 5
    },
    title: {
      text: "Product Quality",
      align: "left",
    },colors:['#3F4CEC',],
    grid: {
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
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
      width: [2]
    },markers: {
      colors: '#FFFFFF',
      strokeColors: '#00B65E',
      size: 5
    },
    title: {
      text: "Product Utility",
      align: "left",
    },colors:['#00B65E',],
    grid: {
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };
  const columnChartSeries = [
    {
      name: "Rating",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Qualtity",
      data: [76, 85, 10, 98, 87, 98, 91, 90, 94],
    },
    {
      name: "Availability",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
    {
      name: "Utility",
      data: [35, 41, 36,98,41, 91, 87, 98, 90, ],
    },
  ];
  const lineChartSeries1 = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91],
    },
  ];
  const lineChartSeries2 = [
    {
<<<<<<< Updated upstream
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
=======
      name: "Utility Rating",
      data: [2,3,4],
      // data: overallRating?.proudctsQualityRating,
>>>>>>> Stashed changes
    },
  ];
  return (
    <>
<<<<<<< Updated upstream
      <Header />
      <Grid container padding={5}>
        <Grid item xs={12} paddingBottom={5}>
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
=======
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
        {console.log("Grid got called")}
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
          <Grid item xs={12}>
          <Line options={options} data={data} />;
          </Grid>
>>>>>>> Stashed changes
        </Grid>
      )}
    </>
  );
};

export default Dashboard;
