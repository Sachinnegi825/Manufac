import React from "react";
import { Table } from "@mantine/core";

const TableData = (props) => {
  const { measure, stat1, stat2, stat3 } = props;

  const tableData = {
    caption: `Statistical Measures for ${measure}`,
    head: ["Measure", "Class1", "Class2", "Class3"],
    body: [
      [`${measure} Mean`, stat1.mean, stat2.mean, stat3.mean],
      [`${measure} Mode`, stat1.mode, stat2.mode, stat3.mode],
      [`${measure} Median`, stat1.median, stat2.median, stat3.median],
    ],
  };

  return <Table data={tableData} className="table" />;
};

export default TableData;
