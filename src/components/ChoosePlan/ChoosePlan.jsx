import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const data = [];

const ChoosePlanComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        padding: "8.125rem 9.375rem",
        backgroundColor: "var(--primary-white)",
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
        choose a plan
      </Typography>
      <Typography
        sx={{
          fontSize: "3.25rem",
          fontWeight: 600,
          marginBottom: "3.75rem",
          width: "50%",
        }}
      >
        Affordable Pricing for Genuine Dummy Tickets{" "}
      </Typography>

      {/* cards section */}
      <Box
        mb={7}
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      ></Box>
    </Box>
  );
};

export default ChoosePlanComponent;
