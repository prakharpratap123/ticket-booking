import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import bgImage from "../../assets/sectionTwoBg.svg";
import logo1 from "../../assets/aboutKeyLogo1.jpeg";
import logo2 from "../../assets/aboutKeyLogo2.jpeg";
import logo3 from "../../assets/aboutKeyLogo3.jpeg";

const data = [
  {
    logoSrc: logo1,
    title: "Unique Service",
    details:
      "As an IATA-accredited travel agent, we work directly with airlines to provide authentic, reliable flight bookings accepted by consulates and immigration authorities worldwide. we ensure that you get the documentation you need without the hassle of booking a full-price ticket or risking cancellation penalties.",
  },
  {
    logoSrc: logo2,
    title: "Exceptional Customer Service",
    details:
      "We pride ourselves on delivering exceptional customer service and supporting travelers at every step of their journey. Whether you’re applying for a visa, renewing your passport, or simply need proof of onward travel, our mission is to make your travel documentation process as smooth and stress-free as possible.",
  },
  {
    logoSrc: logo3,
    title: "Affordable Travel Solutions",
    details:
      "With a track record of helping thousands of satisfied customers, we are committed to offering reliable, affordable, and flexible travel solutions. Let us help you get one step closer to your destination with ease and confidence.",
  },
];

const AboutKeyFeatureComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "7.5rem 13rem 4.5rem",
        backgroundColor: "#F5F5FF",
        // backgroundImage: `url(${bgImage})`,
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        color: "var(--primary-text-color)",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.125rem",
          fontWeight: 600,
          color: "var(--primary-blue)",
          textTransform: "uppercase",
          marginBottom: "1.25rem",
        }}
      >
        swift & secure
      </Typography>
      <Typography
        sx={{
          fontSize: "3.25rem",
          fontWeight: 600,
          marginBottom: "3.75rem",
          width: "60%",
        }}
      >
        Dummy Flight Tickets that are Fast, Genuine, & Hassle Free
      </Typography>

      {/* cards section */}
      <Box
        mb={7}
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              width: "calc(33% - 26px - 5.8rem)",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0px 5px 24.98px 0px #C8C8C840",
              backgroundColor: "var(--primary-white)",
              padding: "2.625rem 2.9rem",
              borderRadius: "2.375rem",
            }}
          >
            <img
              src={item.logoSrc}
              alt="logo"
              style={{ height: 98, width: 98 }}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, fontSize: "1.75rem", margin: "1.25rem 0" }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontSize: "1.125rem",
                color: "var(--tertiary-text-color)",
              }}
            >
              {item.details}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AboutKeyFeatureComponent;
