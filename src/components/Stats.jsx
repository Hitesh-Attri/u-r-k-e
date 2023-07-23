import React from "react";
import { BarChart } from "@mui/x-charts";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// import CircularProgress from "@mui/material/CircularProgress";
import {
  CircularProgress,
  CircularProgressLabel,

  // SelectField,
} from "@chakra-ui/react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Stats = () => {
  const employer = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
  ];
  const employee = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
  ];
  const tInterest = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
  ];
  // const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

  const xLabels = [
    "20",
    "",
    "25",
    " ",
    "30",
    "   ",
    "35",
    "    ",
    "40",
    "     ",
    "60",
    "      ",
    "65",
  ];
  return (
    <div className="stats-section" style={{ padding: "2em" }}>
      <div style={{ marginBottom: "1em" }}>
        <p style={{ color: "blue" }}>Retirement Income</p>
        <p style={{ fontSize: "24px" }}>Starting Year 2056</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0em 1em 0em 1em",
          marginBottom: "1em",
        }}
      >
        <div
          style={{ borderBottom: "2px solid black", padding: "0 2em 0 2em" }}
        >
          <h1>$300,000</h1>
          <p>My Goal</p>
        </div>
        <div
          style={{ borderBottom: "2px solid black", padding: "0 2em 0 2em" }}
        >
          <h2>59%</h2>
          <p>Goal Achieved</p>
        </div>
        <div
          style={{ borderBottom: "2px solid black", padding: "0 2em 0 2em" }}
        >
          <h2>$300</h2>
          <p>Est. Monthly Income</p>
        </div>
      </div>
      <div>
        <p>Contributions Overtime</p>
        <div style={{ display: "flex", flexDirection: "row", gap: "3em" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FiberManualRecordIcon style={{ color: "#0800a3" }} />
            <p>
              Employer: <span style={{ fontWeight: 700 }}>K 73,500</span>
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FiberManualRecordIcon style={{ color: "#4935ff" }} />
            <p>
              Employee:
              <span style={{ fontWeight: 700 }}>K 52,500</span>
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FiberManualRecordIcon style={{ color: "#85afff" }} />
            <p>
              Total Interest: <span style={{ fontWeight: 700 }}>K 244,313</span>
            </p>
          </div>
        </div>
        <div>
          <BarChart
            colors={["#0800a3", "#4935ff", "#85afff"]}
            width={600}
            height={300}
            series={[
              { data: employer, stack: "stack1" },
              // { data: amtData, label: "amt" },
              { data: employee, stack: "stack1" },
              { data: tInterest, stack: "stack1" },
            ]}
            xAxis={[{ data: xLabels, scaleType: "band" }]}
          />
        </div>
      </div>

      <div>
        <h3>How do I compare to my peers?</h3>
        <p>These numbers represent current goal achievement</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "2em",
        }}
      >
        <div>
          <div style={{ marginBottom: "0.4em" }}>
            <FormControl fullWidth sx={{ width: 130 }}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem>Under 10</MenuItem>
                <MenuItem>Under 20</MenuItem>
                <MenuItem>Under 30</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ marginBottom: "0.4em" }}>
            <FormControl fullWidth sx={{ width: 130 }}>
              <InputLabel id="demo-simple-select-label">Salary</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem>K 0 - K 10</MenuItem>
                <MenuItem>K 10 - K 20</MenuItem>
                <MenuItem>K 20 - K 30</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl fullWidth sx={{ width: 130 }}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem>Male</MenuItem>
                <MenuItem>Female</MenuItem>
                <MenuItem>Other</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CircularProgress value={78} size={100} color="green.400">
              <CircularProgressLabel>78%</CircularProgressLabel>
            </CircularProgress>
            <p>Average</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CircularProgress value={95} size={100} color="green.400">
              <CircularProgressLabel>95%</CircularProgressLabel>
            </CircularProgress>
            <p>Top</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CircularProgress value={59} size={100} color="green.400">
              <CircularProgressLabel>59%</CircularProgressLabel>
            </CircularProgress>
            <p>Me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
