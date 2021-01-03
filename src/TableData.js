import { Typography } from "@material-ui/core";
import React from "react";
import Data from "./data/PeriodicTable.json";
import "./TableData.css";

const TableData = () => {
  const data = Data;
  return (
    <>
      <div className="main">
        {data.map((d) => {
          return (
            <div className="container" key={d.Id}>
              <div className="card">
                <div className="content">
                  <Typography component="h2" variant="h2">
                    {d.atomic_number}
                  </Typography>
                  <Typography component="h3" variant="h3">
                    {d.name}
                  </Typography>
                  <Typography component="p" variant="subtitle1">
                    <b>Symbol</b> {d.symbol}
                  </Typography>
                  <Typography component="p" variant="subtitle1">
                    <b>Period</b> {d.period}
                  </Typography>
                  <Typography component="p" variant="subtitle1">
                    <b>Appearance</b> {d.appearance || "N/A"}
                  </Typography>
                  <Typography component="p" variant="subtitle1">
                    <b>Group Block</b> {d.group_block || "N/A"}
                  </Typography>
                  <Typography component="p" variant="subtitle1">
                    <b>Atomic Weight</b> {d.atomic_weight || "N/A"}
                  </Typography>
                  <Typography component="p" variant="subtitle1">
                    {d.phase || "N/A"}
                  </Typography>
                  <Typography component="p" variant="subtitle1">
                    <b>Category</b> {d.element_category || "N/A"}
                  </Typography>
                  <Typography component="p" variant="subtitle1">
                    <b>Electronic Configuration</b>{" "}
                    {d.electron_configuration || "N/A"}
                  </Typography>
                  <Typography component="p" variant="subtitle1">
                    <b>Melting Points</b> {d.melting_point || "N/A"}
                  </Typography>
                  <Typography component="p" variant="subtitle1">
                    <b>Boiling Points</b> {d.boiling_point || "N/A"}
                  </Typography>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TableData;
