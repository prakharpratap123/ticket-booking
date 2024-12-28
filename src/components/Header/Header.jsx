import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/dummyFlightOnlyLogo.jpeg";
import styles from "./Header.module.css";
import { Box, Button, Typography } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.headerWrapper}>
      <Box className={styles.logoWrapper} onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className={styles.logo} />
        <Typography
          variant="body1"
          sx={{ fontSize: "2rem", marginLeft: "15px" }}
        >
          Dummy Flight Ticket
        </Typography>
      </Box>
      <Box>
        <Button sx={{ mr: 4 }} className="secondary-btn">
          Get Support
        </Button>
        <Button
          className="primary-btn"
          onClick={() => {
            navigate("/book-tickets?active=travel-details");
          }}
        >
          Book Now
        </Button>
      </Box>
    </header>
  );
};

export default Header;
