import React from "react";
import { Box, Container, Typography, IconButton, Button } from "@mui/material";
import { Facebook, Instagram, YouTube, LinkedIn } from "@mui/icons-material";
import footerBgImg from "../../assets/footerBgImg.svg";
import bgImage from "../../assets/fifthSectionBg.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer
      style={{
        backgroundImage: `url(${footerBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "22.8rem 9.375rem 4rem",
        color: "#fff",
        position: "relative",
      }}
    >
      {/* hanger component */}
      <Box
        sx={{
          padding: "3.875rem 4.625rem",
          color: "var(--primary-white)",
          background: `linear-gradient(0deg, #5057EA, #5057EA), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "2.5rem",
          position: "absolute",
          top: "-25%",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.125rem",
            fontWeight: 600,
            marginBottom: "1.25rem",
            textTransform: "uppercase",
          }}
        >
          your journey simplified
        </Typography>
        <Typography
          sx={{
            fontSize: "3.25rem",
            fontWeight: 600,
            marginBottom: "2.375rem",
            width: "70%",
          }}
        >
          Take Off with Ease – Get Your Dummy Flight Ticket Today!
        </Typography>
        <Button className="tertiary-btn">Book Now</Button>
      </Box>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          // gap: "2rem",
          maxWidth: "1920px !important",
          padding: "0 !important",
        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            // gap: "2rem",
            width: "100%",
          }}
        >
          {/* Left Section */}
          <Box sx={{ width: "35%" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 4, fontSize: "2.25rem" }}
            >
              Dummy Flight Ticket
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.75,
                marginBottom: "1rem",
                color: "#A8A8A8",
                fontWeight: 400,
                fontSize: "1.25rem",
              }}
            >
              As an IATA-accredited agent since 2018, we specialize in providing
              genuine flight reservations for visa applicants, frequent
              travelers, and digital nomads. Our service offers reliable,
              cost-effective solutions, designed to simplify travel
              documentation and ensure peace of mind wherever you go.
            </Typography>
            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton sx={{ color: "white" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <YouTube />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>

          {/* Links Section */}
          <Box
            sx={{
              display: "flex",
              gap: "4rem",
              width: "calc(65% - 5rem)",
            }}
          >
            {/* Links */}
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                  borderBottom: "2px solid white",
                  display: "inline-block",
                  mb: 5,
                  fontSize: "2.25rem",
                }}
              >
                Links
              </Typography>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "1rem",
                    cursor: "pointer",
                    fontWeight: 400,
                    fontSize: "1.375rem",
                    color: "#A8A8A8",
                  }}
                  onClick={() => navigate("/")}
                >
                  Home
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "1rem",
                    cursor: "pointer",
                    fontWeight: 400,
                    fontSize: "1.375rem",
                    color: "#A8A8A8",
                  }}
                  onClick={() => navigate("/about")}
                >
                  About Us
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    fontSize: "1.375rem",
                    color: "#A8A8A8",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/terms-and-conditions")}
                >
                  Terms & Conditions
                </Typography>
              </Box>
            </Box>

            {/* Get Help */}
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  fontSize: "2.25rem",
                  marginBottom: "0.75rem",
                  borderBottom: "2px solid white",
                  display: "inline-block",
                  mb: 5,
                }}
              >
                Get Help
              </Typography>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "1rem",
                    cursor: "pointer",
                    fontWeight: 400,
                    fontSize: "1.375rem",
                    color: "#A8A8A8",
                  }}
                  onClick={() => navigate("/faqs")}
                >
                  FAQs
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "1rem",
                    cursor: "pointer",
                    fontWeight: 400,
                    fontSize: "1.375rem",
                    color: "#A8A8A8",
                  }}
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </Typography>
              </Box>
            </Box>

            {/* Contact Us */}
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  fontSize: "2.25rem",
                  marginBottom: "0.75rem",
                  borderBottom: "2px solid white",
                  display: "inline-block",
                  mb: 5,
                }}
              >
                Contact Us
              </Typography>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "1rem",
                    cursor: "pointer",
                    fontWeight: 400,
                    fontSize: "1.375rem",
                    color: "#A8A8A8",
                  }}
                >
                  📍 Gurugram, India | Sharjah, UAE
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "1rem",
                    cursor: "pointer",
                    fontWeight: 400,
                    fontSize: "1.375rem",
                    color: "#A8A8A8",
                  }}
                >
                  ✉️ help@dummyflightticket.com
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    fontSize: "1.375rem",
                    color: "#A8A8A8",
                  }}
                >
                  📞 (+256) 214 203 215
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Section */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            paddingTop: "3.75rem",
            marginTop: "2rem",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          © 2024 dummy flight ticket. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
