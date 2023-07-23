import { Button, Slider } from "@mui/material";
import React from "react";

const SliderSection = () => {
  return (
    <div
      className="slider-section"
      style={{
        width: "20%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginBottom: "1em",
          padding: "2em",
          backgroundColor: "whitesmoke",
        }}
      >
        <h3 style={{ marginBottom: "2em" }}>Retirement Strategy</h3>
        <p>Employee Contribution</p>
        <Slider
          defaultValue={12}
          aria-label="Default"
          valueLabelDisplay="auto"
        />

        <p>Retirement Age</p>
        <Slider
          style={{ marginBottom: "2em" }}
          defaultValue={65}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <hr style={{ marginBottom: "2em" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "1em",
          }}
        >
          <p>Retirement Contibutio</p>
          <p>8.4%</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "1em",
          }}
        >
          <p>Interest Rate</p>
          <p>5%</p>
        </div>
        <Button style={{ width: "100%", backgroundColor: "skyblue" }}>
          Update
        </Button>
        <p style={{ textAlign: "center" }}>View Help Docs {">"}</p>
      </div>
      <div style={{ borderLeft: "2px solid black", padding: "0 1em 0 1em" }}>
        <p>Are you considering a </p>
        <p>Housing Advance?</p>
        <p>Limited time reduced interest.</p>
        <p>Learn More {">"}</p>
      </div>
    </div>
  );
};

export default SliderSection;
