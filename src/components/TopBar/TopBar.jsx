import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const TopBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--secondary-text-color)",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
        fontSize: "0.875rem",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <EmailIcon sx={{ color: "orange", marginRight: "0.5rem" }} />
        <Typography component="span" sx={{ marginRight: "1.5rem" }}>
          info@accredittechnologies.com
        </Typography>
        <PhoneIcon sx={{ color: "orange", marginRight: "0.5rem" }} />
        <Typography component="span">+91-8766246536</Typography>
      </Box>
      <Box>
        <IconButton
          sx={{ color: "#fff" }}
          aria-label="LinkedIn"
          href="https://www.linkedin.com/company/accredit-technologies-pvt-ltd/"
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ color: "#fff" }} aria-label="Twitter">
          <XIcon fontSize="small" />
        </IconButton>
        <IconButton
          sx={{ color: "#fff" }}
          aria-label="Facebook"
          href="https://www.facebook.com/Accredittech/"
        >
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton
          sx={{ color: "#fff" }}
          aria-label="Instagram"
          href="https://www.instagram.com/accredittech/"
        >
          <InstagramIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
