import React, { useEffect } from "react";
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Search, ExpandMore } from "@mui/icons-material";
import { Button, TextField, InputAdornment, Accordion } from "@mui/material";

const accordianData = [
  {
    summary:
      "What is a dummy flight ticket, and how is it used for visa applications?",
    details: "",
    expanded: false,
  },
  {
    summary: "Is purchasing a dummy flight ticket safe and secure?",
    details:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived ,",
    expanded: true,
  },
  {
    summary: "Is purchasing a dummy flight ticket safe and secure?",
    details: "",
    expanded: false,
  },
  {
    summary: "How long is a dummy flight ticket valid for visa processing?",
    details: "",
    expanded: false,
  },
  {
    summary: "Will the dummy flight ticket affect my travel plans",
    details: "",
    expanded: false,
  },
];

const Faqs = () => {
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
        // maxWidth: "1920px",
        // margin: "0 auto",
        paddingBottom: "20rem",
      }}
    >
      <Box
        sx={{
          padding: "2.5rem 7rem",
          height: "500px",
          display: "grid",
          placeContent: "center",
          // backgroundColor: "var(--secondary-background-color)",
        }}
      >
        <Box
          sx={{
            fontSize: "3.75rem",
            fontWeight: 600,
            fontFamily: `"Roboto", "Helvetica", "Arial", "sans-serif"`,
          }}
        >
          Frequently Asked Questions
        </Box>
      </Box>

      <Box
        style={{
          height: "auto",
          padding: "2.5rem 7rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: "15px",
          backgroundColor: "#fff",
        }}
      >
        <Box
          style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
        >
          <Button variant="contained">General</Button>
          <Button variant="outlined">Customer Queries</Button>
          <Button variant="outlined">Dummy Flight</Button>
          <Button variant="outlined">Payment and Billing</Button>
          <Button variant="outlined">Technical Support</Button>
        </Box>

        <Box>
          <TextField
            sx={{ minWidth: "320px" }}
            placeholder="Search specific questions or topics"
            size="small"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
      </Box>

      <Box
        style={{
          height: "auto",
          padding: "2.5rem 7rem",
          backgroundColor: "#fff",
        }}
      >
        {accordianData?.map(({ summary, details, expanded }, index) => (
          <Accordion
            defaultExpanded={expanded}
            sx={{
              margin: "10px 0px",
              background: "#0071D81a",
              boxShadow: "none",
              borderRadius: "5px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ fill: "#0071D8" }} />}
            >
              <div style={{ fontSize: "24px", fontWeight: 500 }}>
                <span style={{ marginRight: "5px" }}>{`${index + 1} .`}</span>
                {summary}
              </div>
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: "20px", fontWeight: 400 }}>
              {details}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Faqs;
