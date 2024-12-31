import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const data = [
  { num: "100 %", firstLine: "Verified Dummy", secondLine: "Flight Ticket" },
  { num: "30", firstLine: "Minutes Urgent", secondLine: "Delivery" },
  { num: "24 X 7", firstLine: "Customer", secondLine: "Support" },
  { num: "$ 5", firstLine: "Affordable Price", secondLine: "Just $5" },
];

const PerksComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        width: "100%",
        padding: "1.5rem 7rem",
        color: "var(--primary-white)",
        backgroundColor: "#232324",
        display: "flex",
        alignItems: "center",
      }}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "25%",
            paddingLeft: index !== 0 ? "7rem" : 0,
            borderRight: index !== 3 ? "2px solid #ffffff" : "none",
          }}
        >
          <Typography variant="body1" sx={{ fontSize: "3.5rem" }}>
            {item.num}
          </Typography>
          <Box sx={{ paddingLeft: "1rem" }}>
            <Typography variant="body2">{item.firstLine}</Typography>
            <Typography variant="body2">{item.secondLine}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PerksComponent;
