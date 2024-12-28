import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import clients from "../../assets/clients.jpeg";
import dualTickets from "../../assets/dualTickets.png";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";

const HeroComponent = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        width: "calc(100% - 8rem)",
        padding: "2rem 1rem 2rem 7rem",
      }}
    >
      <Box sx={{ width: "40%", display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#E7EDFF",
            borderRadius: "2rem",
            width: "max-content",
            padding: "0.5rem 1.5rem",
          }}
        >
          <Typography variant="body2">Explore the world</Typography>
          <PublicIcon sx={{ color: "#5057EA", ml: 1 }} />
        </Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: 600, fontSize: "3.5rem", my: 2 }}
        >
          Secured a Dummy Flight Ticket at just $5
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: "1.25rem",
            color: "var(--secondary-text-color)",
          }}
        >
          Dummy Flight Ticket For visa application, immigration, proof of
          Return, passport renewal & visa extensions.
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "1.875rem",
            mt: 7,
            mb: 1,
          }}
        >
          Ratings{" "}
          <StarIcon sx={{ color: "#FDD835", mx: 1, fontSize: "2rem" }} /> 5.0
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.25rem", color: "#797979", fontWeight: 400, mb: 3 }}
        >
          Trusted By Clients From worldwide.
        </Typography>
        <img
          src={clients}
          alt="clients"
          style={{ width: "250px", marginBottom: "3.75rem" }}
        />
        <Button className="primary-btn" sx={{ width: "max-content" }}>
          Book Now
        </Button>
      </Box>
      <Box sx={{ width: "60%", display: "flex", justifyContent: "end" }}>
        <img
          src={dualTickets}
          alt="tickets"
          style={{ width: "90%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default HeroComponent;
