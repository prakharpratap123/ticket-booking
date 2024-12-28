import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Breadcrumbs } from "@mui/material";
import { styled } from "@mui/system";
import { privacyPolicyData } from "../utils/privacyPolicyData/privacyPolicyData";

const BackgroundBox = styled(Box)({
  backgroundImage: `url('https://echooling-react.vercel.app/static/media/1.444626c32f772f4850ee.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "300px",
  marginTop: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  "@media (max-width: 600px)": {
    height: "200px",
  },
});

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
});

const ContentBox = styled(Box)({
  padding: "2rem",
  maxWidth: "1920px",
  margin: "2rem auto",
  lineHeight: "1.8",
});

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ color: "#4b4b4b", fontWeight: "400" }}>
      <BackgroundBox>
        <Overlay />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            color: "white",
            textAlign: "center",
          }}
        >
          {/* About Us Text */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              background:
                "linear-gradient(135deg, #dff7fd, #bbed98, #e9e678, #fbc5c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Privacy Policy
          </Typography>

          {/* Breadcrumbs */}
          <Breadcrumbs
            separator="•"
            aria-label="breadcrumb"
            sx={{ justifyContent: "center", display: "flex", color: "white" }}
          >
            <Link
              to="/"
              style={{
                fontSize: "1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Typography color="inherit" sx={{ fontSize: "1rem" }}>
              Privacy Policy
            </Typography>
          </Breadcrumbs>
        </Box>
      </BackgroundBox>

      {/* Content Section */}
      <ContentBox>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Accredit Technologies Private Limited
        </Typography>
        <Box
          sx={{
            typography: "body1",
            color: "var(--primary-text-color)",
            wordBreak: "break-word",
            "& p": { mb: 2 },
            "& h2": { mt: 4, mb: 2 },
            "& h3": { mt: 3, mb: 1.5 },
            overflowX: "hidden",
            maxWidth: "100%",
            "& *": {
              maxWidth: "100% !important",
            },
          }}
          dangerouslySetInnerHTML={{ __html: privacyPolicyData }}
        />
      </ContentBox>
    </Box>
  );
};

export default PrivacyPolicy;
