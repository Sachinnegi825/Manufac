import React, { useEffect } from "react";
import data from "../constants/ApiData";
import { calculateAverages, getMaxAndMinCropsByYear } from "../constants/Utils";
import TableData from "./Table";

const Home = () => {
  const getmax = getMaxAndMinCropsByYear(data);

  const tableData = {
    caption: "Crop Production Summary",
    head: [
      "Year",
      "Crop with Maximum Production in that Year",
      "Crop with Minimum Production in that Year",
    ],
    body: getmax.map(({ year, maxCrop, minCrop }) => [
      year.slice(-4),
      maxCrop,
      minCrop,
    ]),
  };

  const tableavgData = {
    caption: "Average Crop Data (1950-2020)",
    head: [
      "Crop",
      "Average Yield of the Crop between 1950-2020",
      "Average Cultivation Area between 1950-2020",
    ],
    body: calculateAverages(data),
  };

  useEffect(() => {
    console.log("getmax", tableavgData);
    console.log("fs", tableData);
  }, []);

  return (
    <div>
      <h1>Crop Production Analysis</h1>
      <TableData tabledata={tableData} />
      <TableData tabledata={tableavgData} />
    </div>
  );
};

export default Home;
