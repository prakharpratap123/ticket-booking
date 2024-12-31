import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import bgImage from "../../assets/sectionTwoBg.svg";
import logo1 from "../../assets/sectionTwoLogo1.jpeg";
import logo2 from "../../assets/sectionTwoLogo2.jpeg";
import logo3 from "../../assets/sectionTwoLogo3.jpeg";

const data = [
  {
    logoSrc: logo1,
    title: "Genuine Dummy Ticket",
    details:
      "Our service provides genuine dummy flight ticket that meet visa and immigration requirements, offering peace of mind with real, verifiable bookings. Each reservation is issued by an authentic airline, ensuring reliability and compliance with your documentation needs.",
  },
  {
    logoSrc: logo2,
    title: "Worldwide Flight",
    details:
      "With access to flights across the globe, we provide dummy ticket for all major destinations. No matter where you’re headed, our service can secure a genuine dummy flight ticket booking with worldwide availability.",
  },
  {
    logoSrc: logo3,
    title: "Hassle free process",
    details:
      "Our streamlined, user-friendly process allows you to secure a dummy flight ticket in just a few clicks. With a simple online form and quick confirmation, we eliminate the usual complexities, making it easy for you to get the documentation you need quickly and efficiently.",
  },
];

const SwiftAndSecureComponent = () => {
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
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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
        Swift & Secure
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
      <Button className="primary-btn">Book Now</Button>
    </Box>
  );
};

export default SwiftAndSecureComponent;
