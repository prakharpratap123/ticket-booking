import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Tabs,
  Tab,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "antd";
import { Flight } from "@mui/icons-material";
import "./style.scss";

const FlightDetails = () => {
  const navigate = useNavigate();
  const [activeTrip, setActiveTrip] = useState("one-way");
  const [arrivalDay, setArrivalDay] = useState("same-day-arrival");
  const [location, setLocation] = useState("delhi");

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div id="flight-details">
      <div className="travel-details">
        <div className="trip-select">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={activeTrip}
              onChange={({ target: { value } }) => setActiveTrip(value)}
            >
              <FormControlLabel
                value="one-way"
                control={<Radio />}
                label="One Way"
              />
              <FormControlLabel
                value="round-trip"
                control={<Radio />}
                label="Round Trip"
              />
              <FormControlLabel
                value="multi-trip"
                control={<Radio />}
                label="Multi Trip"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div
          className="label-name mt-3"
          style={{ fontSize: "16px", fontWeight: 500, color: "#fff" }}
        >
          Route
        </div>

        <div className="row mt-1">
          <div className="col-5">
            <TextField
              placeholder="From"
              size="small"
              className="w-100"
              sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
            />
          </div>

          <div
            className="col-2"
            style={{ display: "grid", placeContent: "center" }}
          >
            <Flight sx={{ fill: "#fff", transform: "rotate(90deg)" }} />
          </div>

          <div className="col-5">
            <TextField
              placeholder="To"
              size="small"
              className="w-100"
              sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
            />
          </div>
        </div>

        <div
          className="label-name mt-3"
          style={{ fontSize: "16px", fontWeight: 500, color: "#fff" }}
        >
          Departure
        </div>

        <div className="row mt-1">
          <div className="col-12">
            <DatePicker
              onChange={onChange}
              className="w-100"
              style={{ height: "40px" }}
              placeholder="Departure Date"
            />
          </div>
        </div>

        <div className="arrival-day-select mt-3">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={arrivalDay}
              onChange={({ target: { value } }) => setArrivalDay(value)}
            >
              <FormControlLabel
                value="same-day-arrival"
                control={<Radio />}
                label="Same Day Arrival"
              />
              <FormControlLabel
                value="next-day-arrival"
                control={<Radio />}
                label="Next Day Arrival"
              />
              <FormControlLabel
                value="no-preference"
                control={<Radio />}
                label="No Preference"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div
          className="label-name mt-1"
          style={{ fontSize: "16px", fontWeight: 500, color: "#fff" }}
        >
          Except transit through (Optional)
        </div>

        <div className="row">
          <div className="col-6">
            <Select
              id="location-select"
              value={location}
              onChange={({ target: { value } }) => {
                setLocation(value);
              }}
              size="small"
              sx={{
                width: "100%",
                marginTop: "5px",
                backgroundColor: "#fff",
                borderRadius: "4px",
              }}
              placeholder="Delhi"
            >
              <MenuItem value={"delhi"}>Delhi</MenuItem>
              <MenuItem value={"mumbai"}>Mumbai</MenuItem>
              <MenuItem value={"kolkata"}>Kolkata</MenuItem>
            </Select>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            marginTop: "200px",
          }}
        >
          <Button
            sx={{
              color: "#fff",
              textTransform: "capitalize",
              backgroundColor: "#fff",
              borderColor: "#fff",
              color: "#000",
            }}
            variant="contained"
            onClick={() => navigate(`?active=contact-details`)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
