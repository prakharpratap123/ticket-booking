import React, { useState } from "react";
import { styled } from "@mui/system";
import { Box, Button, TextField, Typography } from "@mui/material";
// import LeftSideComponent from "../components/LeftSideComponent/LeftSideComponent";
import { kycApi } from "../services/kycServices";
import { useNavigate } from "react-router-dom";

const FlexBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  color: "var(--primary-text-color)",
  alignItems: "center",
  width: "40%",
  padding: "1rem",
  justifyContent: "center",
  backgroundColor: "#f5f5f5",
  backgroundImage: `url('https://echooling-react.vercel.app/static/media/1.c3e75a261786724f85d8.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const FormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  backgroundColor: "white",
  boxShadow: "5px 8px 10px 3px rgb(202 208 230)",
  borderRadius: "8px",
  width: "calc(100% - 4rem)",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
  },
}));

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--primary-border-color)",
    },
    "&:hover fieldset": {
      borderColor: "var(--primary-border-color)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--primary-border-color)",
    },
  },
});

const KycDetails = () => {
  const [pan, setPan] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateFields = () => {
    const newErrors = {};

    const panRegex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    if (!pan) {
      newErrors.pan = "PAN Number is required";
    } else if (!panRegex.test(pan)) {
      newErrors.pan = "Invalid PAN format";
    }

    // DOB Validation (User must be 18 years old)
    if (!dob) {
      newErrors.dob = "Date of Birth is required";
    }

    // Aadhar Validation
    const aadharRegex = /^[0-9]{4} [0-9]{4} [0-9]{4}$/;
    if (!aadhar) {
      newErrors.aadhar = "Aadhar Number is required";
    } else if (!aadharRegex.test(aadhar)) {
      newErrors.aadhar = "Invalid Aadhar format";
    }

    return newErrors;
  };

  const handleSubmitClick = () => {
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      kycApi({
        panCard: pan,
        dateOfBirth: dob,
        aadharCard: aadhar.replace(/\s+/g, ""),
      })
        .then((res) => {
          console.log("res handleSubmitClick : ", res);
          if (res.statusCode === 200) {
            navigate("/dashboard");
          }
        })
        .catch((error) => console.error("error in OTP verification: ", error));
      console.log("Form Submitted");
    }
  };

  const handleAadharChange = (e) => {
    const value = e.target.value.replace(/\s/g, "");
    const formattedValue = value.replace(/\D/g, "").slice(0, 12);
    const formattedAadhaar = formattedValue
      .replace(/(\d{4})(?=\d)/g, "$1 ")
      .trim();
    setAadhar(formattedAadhaar);
    setErrors((prev) => ({ ...prev, aadhar: "" }));
  };

  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .split("T")[0];

  const color = "black !important";

  return (
    <Box display={"flex"} justifyContent={"space-between"} height={"100vh"}>
      {/* <LeftSideComponent /> */}
      <FlexBox>
        <FormBox>
          <Typography
            variant="body2"
            sx={{ mb: 2, color: "var(--secondary-text-color)" }}
          >
            Enter your <strong>KYC Details</strong>
          </Typography>

          {/* PAN Number */}
          <StyledTextField
            label="PAN Number"
            value={pan}
            required
            onChange={(e) => {
              const value = e.target.value.toUpperCase();
              setPan(value);
              setErrors((prev) => ({ ...prev, pan: "" }));
            }}
            error={!!errors.pan}
            helperText={errors.pan}
            sx={{ mb: 2 }}
            inputProps={{ maxLength: 10 }}
          />

          {/* Date of Birth */}
          <StyledTextField
            name="dob"
            label="Date of Birth"
            placeholder="DD/MM/YYYY"
            variant="outlined"
            required
            type="date"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
              setErrors((prev) => ({ ...prev, dob: "" }));
            }}
            InputProps={{
              inputProps: { max: maxDate },
            }}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              mb: 2,
              svg: { color },
              input: { color },
              label: { color },
            }}
            error={!!errors.dob}
            helperText={errors.dob}
          />

          {/* Aadhar Number */}
          <StyledTextField
            label="Aadhar Number"
            value={aadhar}
            required
            onChange={handleAadharChange}
            error={!!errors.aadhar}
            helperText={errors.aadhar}
            sx={{ mb: 2 }}
            inputProps={{ maxLength: 14 }}
          />

          {/* Submit Button */}
          <Button
            className="secondary-btn"
            color="primary"
            fullWidth
            sx={{ padding: "10px", mb: 2, mt: 2 }}
            onClick={handleSubmitClick}
          >
            Submit
          </Button>
        </FormBox>
      </FlexBox>
    </Box>
  );
};

export default KycDetails;
