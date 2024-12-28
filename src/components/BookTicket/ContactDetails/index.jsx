import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, TextField, MenuItem, Typography, Button } from "@mui/material";
import { DatePicker } from "antd";
import "./style.scss";
import { Add } from "@mui/icons-material";

const ContactDetails = () => {
  const navigate = useNavigate();
  const [contactDetails, setContactDetails] = useState({
    countryCode: "",
    phoneNumber: "",
    email: "",
    title: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    nationality: "",
  });

  const handleChange = (fieldName, value) => {
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: value,
    }));
  };

  const {
    countryCode,
    phoneNumber,
    email,
    title,
    firstName,
    lastName,
    dateOfBirth,
    nationality,
  } = contactDetails || {};
  return (
    <div id="contact-details">
      <div
        className="label-name"
        style={{ fontSize: "16px", fontWeight: 500, color: "#fff" }}
      >
        Contact Details
      </div>

      <div className="row mt-3">
        <div className="col-6">
          <Select
            id="location-select"
            value={countryCode}
            onChange={({ target: { value } }) =>
              handleChange("countryCode", value)
            }
            size="small"
            sx={{
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "4px",
            }}
            displayEmpty
            renderValue={(value) => {
              if (!value) {
                return <Typography color="gray">Country Code</Typography>;
              }
              return value;
            }}
          >
            <MenuItem value={"+91"}>+91</MenuItem>
            <MenuItem value={"+92"}>+92</MenuItem>
            <MenuItem value={"+1"}>+1</MenuItem>
          </Select>
        </div>
        <div className="col-6">
          <TextField
            value={phoneNumber}
            placeholder="Contact Number"
            size="small"
            className="w-100"
            sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
            onChange={({ target: { value } }) => {
              handleChange("phoneNumber", value);
            }}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12">
          <TextField
            value={email}
            placeholder="Email Address"
            size="small"
            className="w-100"
            sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
            onChange={({ target: { value } }) => {
              handleChange("email", value);
            }}
          />
        </div>
      </div>

      <div
        className="label-name mt-3"
        style={{ fontSize: "16px", fontWeight: 500, color: "#fff" }}
      >
        Passenger 1
      </div>

      <div className="row mt-3">
        <div className="col-2">
          <Select
            id="title-select"
            value={title}
            onChange={({ target: { value } }) => handleChange("title", value)}
            size="small"
            sx={{
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "4px",
            }}
            displayEmpty
            renderValue={(value) => {
              if (!value) {
                return <Typography color="gray">Title</Typography>;
              }
              return value;
            }}
          >
            <MenuItem value={"mr"}>Mr.</MenuItem>
            <MenuItem value={"miss"}>Miss</MenuItem>
            <MenuItem value={"mrs"}>Mrs.</MenuItem>
          </Select>
        </div>
        <div className="col-5">
          <TextField
            value={firstName}
            placeholder="First Name"
            size="small"
            className="w-100"
            sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
            onChange={({ target: { value } }) => {
              handleChange("firstName", value);
            }}
          />
        </div>
        <div className="col-5">
          <TextField
            value={lastName}
            placeholder="Last Name"
            size="small"
            className="w-100"
            sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
            onChange={({ target: { value } }) => {
              handleChange("lastName", value);
            }}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6">
          <DatePicker
            value={dateOfBirth}
            onChange={(value) => handleChange("dateOfBirth", value)}
            className="w-100"
            style={{ height: "40px" }}
            placeholder="Date of birth"
          />
        </div>

        <div className="col-6">
          <Select
            id="nationality-select"
            value={nationality}
            onChange={({ target: { value } }) =>
              handleChange("nationality", value)
            }
            size="small"
            sx={{
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "4px",
            }}
            displayEmpty
            renderValue={(value) => {
              if (!value) {
                return <Typography color="gray">Nationality</Typography>;
              }
              return value;
            }}
          >
            <MenuItem value={"indian"}>Indian</MenuItem>
            <MenuItem value={"us"}>US</MenuItem>
            <MenuItem value={"english"}>English</MenuItem>
          </Select>
        </div>
      </div>

      <div
        className="mt-3"
        style={{ display: "flex", alignItems: "center", justifyContent: "end" }}
      >
        <Button
          sx={{ color: "#fff", textTransform: "capitalize" }}
          startIcon={<Add />}
        >
          Add Passenger
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "200px",
        }}
      >
        <Button
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            borderColor: "#fff",
            color: "#fff",
          }}
          variant="outlined"
          onClick={() => navigate(`?active=travel-details`)}
        >
          Back
        </Button>

        <Button
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            backgroundColor: "#fff",
            borderColor: "#fff",
            color: "#000",
          }}
          variant="contained"
          onClick={() => navigate(`?active=other-details`)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ContactDetails;
