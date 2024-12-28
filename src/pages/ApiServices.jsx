import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Accordion,
  Typography,
  Breadcrumbs,
  useMediaQuery,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { apiContent } from "../utils/apiServiceData/apiServiceData";
import { useTheme } from "@mui/material/styles";

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

const ContentBox = styled(Box)(({ isMobile }) => ({
  padding: isMobile ? "2rem 1rem" : "2rem",
  maxWidth: "1920px",
  margin: "2rem auto",
  lineHeight: "1.8",
}));

const SidebarBox = styled(Box)(({ isMobile }) => ({
  padding: isMobile ? "1rem 0.5rem 1rem 0rem" : "1rem",
  width: "25%",
  borderRight: "1px solid var(--primary-border-color)",
}));

const MainContentBox = styled(Box)(({ isMobile }) => ({
  display: "flex",
  width: "75%",
  flexDirection: "column",
  padding: "1rem",
  overflowX: isMobile ? "scroll" : "none",
}));

const ApiServices = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [expanded, setExpanded] = useState("identityApi");
  const [selectedContent, setSelectedContent] = useState("");

  useEffect(() => {
    setSelectedContent("panVerification");
  }, []);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ color: "#4b4b4b", fontWeight: "400" }}>
      {/* Background Section */}
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
          <Typography
            variant={isMobile ? "h5" : isTablet ? "h3" : "h2"}
            sx={{
              fontWeight: "bold",
              mb: 2,
              background:
                "linear-gradient(135deg, #dff7fd, #bbed98, #e9e678, #fbc5c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            API Services
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
              API Services
            </Typography>
          </Breadcrumbs>
        </Box>
      </BackgroundBox>

      {/* Main Content Section */}
      <ContentBox isMobile={isMobile}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          API Services
        </Typography>
        <Typography paragraph>
          At Accredit Technologies, we offer seamless solutions for financial
          institutions, NBFCs, fintechs, and banks to efficiently onboard and
          verify customers, ensuring a smooth and hassle-free experience.
        </Typography>

        <Box display={"flex"}>
          {/* Sidebar with Accordion */}
          <SidebarBox isMobile={isMobile}>
            <Accordion
              expanded={expanded === "identityApi"}
              onChange={handleAccordionChange("identityApi")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Identity API</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ padding: isMobile ? "0.5rem" : "0.5rem 1rem 1rem" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile ? "0 0 1rem 0.5rem" : "0 0 1rem 1rem",
                    fontWeight:
                      selectedContent === "panVerification" ? "bold" : "normal",
                    color:
                      selectedContent === "panVerification"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                  onClick={() => setSelectedContent("panVerification")}
                >
                  PAN Verification
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile
                      ? "0.5rem 0 1rem 0.5rem"
                      : "0.5rem 0 1rem 1rem",
                    fontWeight:
                      selectedContent === "aadhaarVerification"
                        ? "bold"
                        : "normal",
                    color:
                      selectedContent === "aadhaarVerification"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                  onClick={() => setSelectedContent("aadhaarVerification")}
                >
                  Aadhaar Verification
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile
                      ? "0.5rem 0 1rem 0.5rem"
                      : "0.5rem 0 1rem 1rem",
                    fontWeight:
                      selectedContent === "ckycSearch" ? "bold" : "normal",
                    color:
                      selectedContent === "ckycSearch"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                  onClick={() => setSelectedContent("ckycSearch")}
                >
                  CKYC Search and Download
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile
                      ? "0.5rem 0 1rem 0.5rem"
                      : "0.5rem 0 1rem 1rem",
                    fontWeight:
                      selectedContent === "photoIdOcr" ? "bold" : "normal",
                    color:
                      selectedContent === "photoIdOcr"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                  onClick={() => setSelectedContent("photoIdOcr")}
                >
                  Photo Id OCR
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile ? "0.5rem 0 0 0.5rem" : "0.5rem 0 0 1rem",
                    fontWeight:
                      selectedContent === "videoKyc" ? "bold" : "normal",
                    color:
                      selectedContent === "videoKyc"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                  onClick={() => setSelectedContent("videoKyc")}
                >
                  Video KYC
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "businessApi"}
              onChange={handleAccordionChange("businessApi")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Business API</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ padding: isMobile ? "0.5rem" : "0.5rem 1rem 1rem" }}
              >
                <Typography
                  onClick={() => setSelectedContent("gstVerification")}
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile ? "0 0 1rem 0.5rem" : "0 0 1rem 1rem",
                    fontWeight:
                      selectedContent === "gstVerification" ? "bold" : "normal",
                    color:
                      selectedContent === "gstVerification"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                >
                  GST Verification
                </Typography>
                <Typography
                  onClick={() => setSelectedContent("udyamVerification")}
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile
                      ? "0.5rem 0 1rem 0.5rem"
                      : "0.5rem 0 1rem 1rem",
                    fontWeight:
                      selectedContent === "udyamVerification"
                        ? "bold"
                        : "normal",
                    color:
                      selectedContent === "udyamVerification"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                >
                  UDYAM Verification
                </Typography>
                <Typography
                  onClick={() => setSelectedContent("mcaData")}
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile
                      ? "0.5rem 0 1rem 0.5rem"
                      : "0.5rem 0 1rem 1rem",
                    fontWeight:
                      selectedContent === "mcaData" ? "bold" : "normal",
                    color:
                      selectedContent === "mcaData"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                >
                  MCA Data (CIN/DIN)
                </Typography>
                <Typography
                  onClick={() => setSelectedContent("eSignature")}
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile ? "0.5rem 0 0 0.5rem" : "0.5rem 0 0 1rem",
                    fontWeight:
                      selectedContent === "eSignature" ? "bold" : "normal",
                    color:
                      selectedContent === "eSignature"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                >
                  E-signature
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "incomeApi"}
              onChange={handleAccordionChange("incomeApi")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Income API</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ padding: isMobile ? "0.5rem" : "0.5rem 1rem 1rem" }}
              >
                <Typography
                  onClick={() => setSelectedContent("bankVerification")}
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile ? "0 0 1rem 0.5rem" : "0 0 1rem 1rem",
                    fontWeight:
                      selectedContent === "bankVerification"
                        ? "bold"
                        : "normal",
                    color:
                      selectedContent === "bankVerification"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                >
                  Bank Verification (Penny less)
                </Typography>
                <Typography
                  onClick={() => setSelectedContent("form26as")}
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile
                      ? "0.5rem 0 1rem 0.5rem"
                      : "0.5rem 0 1rem 1rem",
                    fontWeight:
                      selectedContent === "form26as" ? "bold" : "normal",
                    color:
                      selectedContent === "form26as"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                >
                  Form 26 AS Verification
                </Typography>
                <Typography
                  onClick={() => setSelectedContent("itrVerification")}
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile
                      ? "0.5rem 0 1rem 0.5rem"
                      : "0.5rem 0 1rem 1rem",
                    fontWeight:
                      selectedContent === "itrVerification" ? "bold" : "normal",
                    color:
                      selectedContent === "itrVerification"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                >
                  ITR Verification
                </Typography>
                <Typography
                  onClick={() => setSelectedContent("creditScore")}
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile
                      ? "0.5rem 0 1rem 0.5rem"
                      : "0.5rem 0 1rem 1rem",
                    fontWeight:
                      selectedContent === "creditScore" ? "bold" : "normal",
                    color:
                      selectedContent === "creditScore"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                >
                  Credit Score (PDF)
                </Typography>
                <Typography
                  onClick={() => setSelectedContent("bankAnalysis")}
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    margin: isMobile ? "0.5rem 0 0 0.5rem" : "0.5rem 0 0 1rem",
                    fontWeight:
                      selectedContent === "bankAnalysis" ? "bold" : "normal",
                    color:
                      selectedContent === "bankAnalysis"
                        ? "var(--tertiary-text-color)"
                        : "inherit",
                  }}
                >
                  Bank Analysis
                </Typography>
              </AccordionDetails>
            </Accordion>
          </SidebarBox>

          {/* Render selected API content */}
          <MainContentBox isMobile={isMobile}>
            {selectedContent && (
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "var(--secondary-text-color)",
                    mb: 2,
                  }}
                >
                  {apiContent[selectedContent].title}
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
                  dangerouslySetInnerHTML={{
                    __html: apiContent[selectedContent].content,
                  }}
                />
              </Box>
            )}

            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{ width: "max-content" }}
            >
              <Button
                className="primary-btn"
                endIcon={<ArrowRightAltIcon />}
                sx={{ mt: 4 }}
                onClick={() => navigate("/contact-us")}
              >
                Contact Sales
              </Button>
              <Button
                className="primary-btn"
                endIcon={<ArrowRightAltIcon />}
                sx={{ mt: 2 }}
                onClick={() => navigate("/bureau-membership")}
              >
                Client Onboarding Form
              </Button>
            </Box>
          </MainContentBox>
        </Box>
      </ContentBox>
    </Box>
  );
};

export default ApiServices;
