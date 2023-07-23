import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Profile = () => {
  const data = [
    {
      id: 1,
      date: "2022-08-07",
      details: "Withdrawal Transfer to Bank-XXX11",
    },
    {
      id: 1,
      date: "2022-08-07",
      details: "Withdrawal Transfer to Bank-XXX11",
    },
    {
      id: 1,
      date: "2022-08-07",
      details: "Withdrawal Transfer to Bank-XXX11",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // padding: "2em 2em 2em 2em",
        backgroundColor: "whitesmoke",
        height: "100vh",
        width: "25vw",
        // alignItems: "center",
        paddingLeft: "3em",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          id="profile-pic"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="profile-pic"
          style={{ height: 70, width: 70, borderRadius: "50%" }}
        />
        <div style={{ padding: 50 }}>
          <h2>Hi Mike,</h2>
          <h6>welcome back</h6>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "2em",
        }}
      >
        <h2>$19,892</h2>
        <p style={{ marginBottom: "1em" }}>Account Balance</p>
        <h3>$4,000</h3>
        <p style={{ marginBottom: "1em" }}>Year-to-Date Contributions</p>
        <FormControl fullWidth sx={{ width: 100 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem>Ten</MenuItem>
            <MenuItem>Twenty</MenuItem>
            <MenuItem>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <h3 style={{ marginBottom: "1em" }}>Recent Transactions</h3>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid black",
                marginRight: "4em",
                marginBottom: "1.5em",
              }}
            >
              <div>
                <h4 style={{ fontWeight: 400 }}>{item.date}</h4>
                <p style={{ fontWeight: 700 }}>{item.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
