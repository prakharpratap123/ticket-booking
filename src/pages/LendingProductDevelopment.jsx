import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Breadcrumbs,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
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

const ContentBox = styled(Box)({
  padding: "2rem",
  maxWidth: "1920px",
  margin: "2rem auto",
  lineHeight: "1.8",
});

const LendingProductDevelopment = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box sx={{ color: "#4b4b4b", fontWeight: "400" }}>
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
            Lending Product Development
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
              Lending Product Development
            </Typography>
          </Breadcrumbs>
        </Box>
      </BackgroundBox>

      {/* Content Section */}
      <ContentBox>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Lending Product Development
        </Typography>
        <Typography paragraph>
          At Accredit Technologies, we specialize in developing tailored lending
          products to meet your business needs. Our services include creating
          comprehensive platforms that integrate seamlessly with various APIs,
          ensuring smooth operations and enhanced functionality.
        </Typography>
        <Typography paragraph>
          We also focus on formulating market-suitable and compliant credit
          policies that align with industry standards. By leveraging our
          expertise, you can streamline your lending processes, enhance customer
          experiences, and optimize risk management.
        </Typography>
        <Typography paragraph>
          Our commitment to innovation and quality ensures that your lending
          products are not only competitive but also effectively address the
          demands of your target market.
        </Typography>
        <Typography paragraph>To Get your product developed –</Typography>

        <Button
          className="primary-btn"
          endIcon={<ArrowRightAltIcon />}
          onClick={() => navigate("/contact-us")}
        >
          Contact Sales
        </Button>
      </ContentBox>
    </Box>
  );
};

export default LendingProductDevelopment;
