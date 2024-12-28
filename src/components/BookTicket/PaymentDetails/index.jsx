import { useState } from "react";
import {
  Select,
  MenuItem,
  Typography,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import "./style.scss";

const currencies = ["USD", "INR"];
const paymentType = [
  "Pay with UPI, Net-Banking, Credit or Debit Card",
  "Bank Transfer",
];

const PaymentDetails = () => {
  const [details, setDetails] = useState({
    stateName: "",
  });
  const [currencyActionBtnNumber, setCurrencyActionBtnNumber] = useState(0);
  const [paymentTypeActionBtnNumber, setPaymentTypeActionBtnNumber] =
    useState(1);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const { stateName } = details || {};

  const handleChange = (fieldName, value) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: value,
    }));
  };
  return (
    <div id="payment-details">
      <div
        className="label-name "
        style={{ fontSize: "16px", fontWeight: 500, color: "#fff" }}
      >
        Currency
      </div>

      <div className="currency-action-btn-wrapper mt-3">
        {currencies?.map((btnName, index) => (
          <div
            className={`currency-action-btn ${
              index === currencyActionBtnNumber ? `currency-active-btn` : ``
            }`}
            onClick={() => setCurrencyActionBtnNumber(index)}
          >
            {btnName}
          </div>
        ))}
      </div>

      <div
        className="label-name mt-3"
        style={{ fontSize: "16px", fontWeight: 500, color: "#fff" }}
      >
        Select State
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <Select
            id="state-select"
            value={stateName}
            onChange={({ target: { value } }) =>
              handleChange("stateName", value)
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
                return <Typography color="gray">Select State</Typography>;
              }
              return value;
            }}
          >
            <MenuItem value={"Uttar Pradesh"}>Uttar Pradesh</MenuItem>
            <MenuItem value={"Bihar"}>Bihar</MenuItem>
            <MenuItem value={"Karnataka"}>Karnataka</MenuItem>
          </Select>
        </div>
      </div>

      <div
        className="label-name mt-3"
        style={{ fontSize: "16px", fontWeight: 500, color: "#fff" }}
      >
        Select Payment Method
      </div>

      <div className="payment-type-action-btn-wrapper mt-3">
        {paymentType?.map((btnName, index) => (
          <div
            className={`payment-type-action-btn ${
              index === paymentTypeActionBtnNumber
                ? `payment-type-active-btn`
                : ``
            }`}
            onClick={() => setPaymentTypeActionBtnNumber(index)}
          >
            {btnName}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          marginTop: "250px",
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
          onClick={() => setIsToastOpen(true)}
        >
          Pay Now
        </Button>
      </div>
      <Snackbar
        open={isToastOpen}
        autoHideDuration={3000}
        onClose={() => setIsToastOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setIsToastOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Payment done successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PaymentDetails;
