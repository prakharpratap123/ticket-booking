import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { Switch } from "antd";
import "./style.scss";

const reasons = [
  "Visa Application",
  "Proof Of Return",
  "Passport Renewal",
  "Visa Extension",
  "Other",
];

const OtherDetails = () => {
  const navigate = useNavigate();
  const [actionBtnNumber, setActionBtnNumber] = useState(1);
  const [otherDetails, setOtherDetails] = useState({
    airlineName: "",
    message: "",
  });
  const { airlineName, message } = otherDetails || {};

  const handleChange = (fieldName, value) => {
    setOtherDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: value,
    }));
  };

  return (
    <div id="other-details">
      <div className="switch-container">
        Recieve Later
        <Switch defaultChecked style={{ background: "#fff", color: "red" }} />
      </div>

      <div
        className="label-name mt-3"
        style={{ fontSize: "16px", fontWeight: 500, color: "#fff" }}
      >
        Purpose to buy dummy tickets
      </div>

      <div className="action-btn-wrapper mt-3">
        {reasons?.map((btnName, index) => (
          <div
            className={`action-btn ${
              index === actionBtnNumber ? `active-btn` : ``
            }`}
            onClick={() => setActionBtnNumber(index)}
          >
            {btnName}
          </div>
        ))}
      </div>

      <div className="row mt-3">
        <div className="col-12">
          <TextField
            value={airlineName}
            placeholder="Which airline are you traveling with?"
            size="small"
            className="w-100"
            sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
            onChange={({ target: { value } }) => {
              handleChange("airlineName", value);
            }}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12">
          <TextField
            multiline
            value={message}
            placeholder="Message (Optional)"
            size="small"
            className="w-100"
            sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
            onChange={({ target: { value } }) => {
              handleChange("message", value);
            }}
            minRows={5}
          />
        </div>
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
          onClick={() => navigate(`?active=contact-details`)}
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
          onClick={() => navigate(`?active=payments`)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default OtherDetails;
