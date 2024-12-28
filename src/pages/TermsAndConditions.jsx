import React, { useEffect } from "react";
import { AccordionDetails, AccordionSummary, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Search, ExpandMore } from "@mui/icons-material";
import { Accordion } from "@mui/material";
import { termsData } from "./TermsData";

const TermsAndConditions = () => {
  const theme = useTheme();
  const arr = [1, 2, 3, 4, 5];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1920px",
        margin: "0 auto",
        paddingBottom: "20rem",
      }}
    >
      <Box
        sx={{
          padding: "2.5rem 7rem",
          height: "500px",
          display: "grid",
          placeContent: "center",
          backgroundColor: "var(--secondary-background-color)",
        }}
      >
        <Box
          sx={{
            fontSize: "3.75rem",
            fontWeight: 600,
            fontFamily: `"Roboto", "Helvetica", "Arial", "sans-serif"`,
          }}
        >
          Terms & Conditions
        </Box>
      </Box>

      <Box
        style={{
          height: "auto",
          padding: "2.5rem 7rem",
          marginTop: "50px",
        }}
      >
        <div style={{ fontSize: "18px", fontWeight: 500 }}>
          Last Updated: November 01, 2024
        </div>
      </Box>

      <Box
        style={{
          height: "auto",
          padding: "2.5rem 7rem",
        }}
      >
        {termsData?.map(({ title, description }) => (
          <div style={{ marginBottom: "45px" }}>
            <div style={{ fontSize: "28px", fontWeight: 500 }}>{title}</div>
            <div
              style={{ fontSize: "18px", lineHeight: "28px", fontWeight: 400 }}
            >
              {description}
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default TermsAndConditions;
