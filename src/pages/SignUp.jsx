import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import {
  Box,
  Link,
  Button,
  MenuItem,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Cookies from "js-cookie";
import {
  userSignUpApi,
  verifySignUpOrLoginOtpApi,
} from "../services/authService";
import { useTheme } from "@mui/material/styles";
import {STATES_AND_UTS} from "../utils/constants/Constants";

const FlexBox = styled(Box)(({ isMobile }) => ({
  display: "flex",
  flexDirection: "column",
  color: "var(--primary-text-color)",
  alignItems: "center",
  padding: "1rem",
  width: isMobile ? "95%" : "40%",
  justifyContent: "center",
  backgroundColor: "#f5f5f5",
  backgroundImage: `url('https://echooling-react.vercel.app/static/media/1.c3e75a261786724f85d8.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const FormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  backgroundColor: "white",
  maxHeight: "calc(100vh - 4rem)",
  overflowY: "auto",
  boxShadow: "5px 8px 10px 3px rgb(202 208 230)",
  borderRadius: "8px",
  width: "calc(100% - 4rem)",
  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#e5eaf0",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
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

const SignUp = () => {
  const navigate = useNavigate();
  const [showOTP, setShowOTP] = useState(false);
  const [gender, setGender] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOTP] = useState("");
  const [errors, setErrors] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const validateFields = () => {
    const newErrors = {};
    if (!gender) newErrors.gender = "Gender is required";
    if (!fullName) newErrors.fullName = "Full Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!mobile) newErrors.mobile = "Mobile Number is required";
    if (!address) newErrors.address = "Address is required";
    if (!city) newErrors.city = "City is required";
    if (!state) newErrors.state = "State is required";
    return newErrors;
  };

  const handleSendOTPClick = () => {
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      if (mobile.length === 10) {
        userSignUpApi({
          fullName: fullName,
          gender: gender,
          email: email,
          phoneNumber: `+91${mobile}`,
          address: address,
          city: city,
          state: state,
        })
          .then((res) => {
            if (res.statusCode === 200) {
              setShowOTP(true);
            }
          })
          .catch((error) =>
            console.error("error in Contact handle submit : ", error)
          );
      }
    }
  };

  const handleSignUpClick = () => {
    if (showOTP) {
      if (otp.length === 4) {
        verifySignUpOrLoginOtpApi({
          phoneNumber: `+91${mobile}`,
          verificationOTP: otp,
        })
          .then((res) => {
            if (res.statusCode === 200) {
              Cookies.set("accessToken", res.data.accessToken, {
                expires: 1,
                sameSite: "strict",
              });
              navigate("/kyc-details");
            }
          })
          .catch((error) =>
            console.error("error in OTP verification: ", error)
          );
      } else {
        setErrors((prev) => ({ ...prev, otp: "Please enter a valid OTP" }));
      }
    } else {
      handleSendOTPClick();
    }
  };

  const handleMobileChange = (event) => {
    const value = event.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setMobile(value);
      setErrors((prev) => ({ ...prev, mobile: "" }));
    }
  };

  const handleOTPChange = (event) => {
    const value = event.target.value;
    if (/^\d{0,4}$/.test(value)) {
      setOTP(value);
      setErrors((prev) => ({ ...prev, otp: "" }));
    }
  };

  const handleChange = (setter, field) => (event) => {
    setter(event.target.value);
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <Box display={"flex"} justifyContent={"space-between"} height={"100vh"}>
      <FlexBox isMobile={isMobile}>
        <FormBox>
          <Typography
            variant="body2"
            sx={{ mb: 2, color: "var(--secondary-text-color)" }}
          >
            Welcome to <strong>Accredit Technologies</strong>
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
            Start process to get your Credit Report in ₹51 only
          </Typography>

          {/* Gender Selection */}
          <StyledTextField
            select
            label="Gender"
            value={gender}
            onChange={handleChange(setGender, "gender")}
            error={!!errors.gender}
            helperText={errors.gender}
            sx={{ mb: 2 }}
            disabled={showOTP}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </StyledTextField>

          {/* Full Name */}
          <StyledTextField
            label="Full Name"
            value={fullName}
            placeholder="As per your Bank Records"
            onChange={handleChange(setFullName, "fullName")}
            error={!!errors.fullName}
            helperText={errors.fullName}
            sx={{ mb: 2 }}
            disabled={showOTP}
          />

          {/* Email */}
          <StyledTextField
            label="Email"
            value={email}
            placeholder="As per your Bank Records"
            onChange={handleChange(setEmail, "email")}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ mb: 2 }}
            disabled={showOTP}
          />

          {/* Address */}
          <StyledTextField
            label="Address"
            value={address}
            placeholder="Enter Address"
            onChange={handleChange(setAddress, "address")}
            error={!!errors.address}
            helperText={errors.address}
            sx={{ mb: 2 }}
            disabled={showOTP}
          />

          {/* City */}
          <StyledTextField
            label="City"
            value={city}
            placeholder="Enter City"
            onChange={handleChange(setCity, "city")}
            error={!!errors.city}
            helperText={errors.city}
            sx={{ mb: 2 }}
            disabled={showOTP}
          />

          {/* State */}
          <StyledTextField
            select
            label="State"
            value={state}
            placeholder="Select State"
            onChange={handleChange(setState, "state")}
            error={!!errors.state}
            helperText={errors.state}
            sx={{ mb: 2 }}
            disabled={showOTP}
          >
            {STATES_AND_UTS.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </StyledTextField>

          {/* Phone Number */}
          <StyledTextField
            label="Phone Number"
            placeholder="As per your Bank Records"
            value={mobile}
            onChange={handleMobileChange}
            error={!!errors.mobile}
            helperText={errors.mobile}
            sx={{ mb: 2 }}
            inputProps={{ maxLength: 10 }}
            disabled={showOTP}
          />

          {showOTP && (
            <StyledTextField
              label="Verify OTP"
              value={otp}
              onChange={handleOTPChange}
              error={!!errors.otp}
              helperText={errors.otp}
              sx={{ mb: 2 }}
              inputProps={{ maxLength: 4 }}
            />
          )}

          {/* SignUp / Verify Button */}
          <Button
            className="secondary-btn"
            color="primary"
            fullWidth
            sx={{ padding: "10px", mb: 2, mt: 2 }}
            onClick={() =>
              showOTP ? handleSignUpClick() : handleSendOTPClick()
            }
            disabled={showOTP && otp.length !== 4}
          >
            {showOTP ? "Verify" : "Sign Up"}
          </Button>

          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              borderBottom: "1px solid #e0e0e0",
              lineHeight: "0.1em",
              margin: "1rem 0",
            }}
          >
            <Typography
              variant="caption"
              sx={{ backgroundColor: "white", padding: "0 10px" }}
            >
              OR
            </Typography>
          </Box>

          <Typography sx={{ textAlign: "center", mb: 1 }}>
            Already have an account?&nbsp;
            <Link
              underline="hover"
              onClick={() => navigate("/login")}
              sx={{ fontWeight: "bold" }}
            >
              Login
            </Link>
          </Typography>
        </FormBox>
      </FlexBox>
    </Box>
  );
};

export default SignUp;
