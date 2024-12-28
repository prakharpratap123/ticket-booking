import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import {
  Box,
  Link,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  userLoginApi,
  verifySignUpOrLoginOtpApi,
} from "../services/authService";
import Cookies from "js-cookie";
import { useTheme } from "@mui/material/styles";

const FlexBox = styled(Box)(({ isMobile }) => ({
  display: "flex",
  flexDirection: "column",
  color: "var(--primary-text-color)",
  alignItems: "center",
  width: isMobile ? "95%" : "40%",
  padding: "1rem",
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
  boxShadow: "5px 8px 10px 3px rgb(202 208 230)",
  borderRadius: "8px",
  width: "calc(100% - 4rem)",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
  },
}));

const Login = () => {
  const navigate = useNavigate();
  const [showOTP, setShowOTP] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOTP] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [otpError, setOTPError] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLoginClick = () => {
    if (!showOTP) {
      if (mobile === "") {
        setMobileError("Mobile Number required");
      } else if (mobile.length < 10) {
        setMobileError("Enter Valid Mobile Number");
      } else {
        userLoginApi({ phoneNumber: `+91${mobile}` })
          .then((res) => {
            console.log("res userLoginApi : ", res);
            if (res.statusCode === 200) {
              setMobileError("");
              setShowOTP(true);
            }
          })
          .catch((error) =>
            console.error("error in OTP verification: ", error)
          );
      }
    } else {
      if (otp.length === 4) {
        verifySignUpOrLoginOtpApi({
          phoneNumber: `+91${mobile}`,
          verificationOTP: otp,
        })
          .then((res) => {
            console.log("res verifySignUpOrLoginOtpApi : ", res);
            if (res.statusCode === 200) {
              Cookies.set("accessToken", res.data.accessToken, {
                expires: 1,
                sameSite: "strict",
              });
              setShowOTP(true);
              res.data.isKycCompleted
                ? navigate("/dashboard")
                : navigate("/kyc-details");
            }
          })
          .catch((error) =>
            console.error("error in OTP verification: ", error)
          );
      } else {
        setOTPError("Please enter a valid OTP");
      }
    }
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
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: "bold",
            }}
          >
            Get started with your phone number
          </Typography>

          <TextField
            label="Mobile Number"
            type="tel"
            fullWidth
            required
            inputProps={{ maxLength: 10, pattern: "[0-9]*" }}
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value.replace(/\D/, ""));
              setMobileError("");
            }}
            sx={{
              mb: 2,
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
            }}
            error={!!mobileError}
            helperText={mobileError}
            disabled={showOTP}
          />

          {showOTP && (
            <TextField
              label="Verify OTP"
              type="tel"
              fullWidth
              required
              inputProps={{ maxLength: 4, pattern: "[0-9]*" }}
              value={otp}
              onChange={(e) => {
                setOTP(e.target.value.replace(/\D/, ""));
                if (otp.length === 6) {
                  setOTPError("");
                }
              }}
              sx={{
                mb: 2,
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
              }}
              error={!!otpError}
              helperText={otpError}
            />
          )}

          <Button
            className="secondary-btn"
            color="primary"
            fullWidth
            sx={{ padding: "10px", mb: 2, mt: 2 }}
            onClick={handleLoginClick}
            disabled={showOTP && otp.length !== 4}
          >
            {showOTP ? "Verify" : "Login"}
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
            Don&apos;t have an account?&nbsp;
            <Link
              underline="hover"
              onClick={() => navigate("/sign-up")}
              sx={{ fontWeight: "bold" }}
            >
              Sign up here
            </Link>
          </Typography>
        </FormBox>
      </FlexBox>
    </Box>
  );
};

export default Login;
