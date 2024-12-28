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
// import creditModelingLogo from "../assets/creditModeling.png";
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

const CreditModeling = () => {
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
            Credit Modeling
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
              Credit Modeling
            </Typography>
          </Breadcrumbs>
        </Box>
      </BackgroundBox>

      {/* Content Section */}
      <ContentBox>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Credit Modeling
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box sx={{ width: "60%" }}>
            <Typography paragraph>
              Credit modeling is a powerful analytical technique that enables
              lenders and financial institutions to evaluate the
              creditworthiness of individuals or businesses. Utilizing
              statistical algorithms and historical data, credit modeling
              predicts the likelihood of a borrower repaying their debt
              obligations by considering factors such as credit history, income,
              employment stability, and debt-to-income ratios.
            </Typography>
            <Typography paragraph>
              This approach streamlines the lending process, allowing for
              faster, more objective credit decisions. With advancements in
              machine learning and artificial intelligence, credit modeling has
              become increasingly sophisticated, providing lenders with accurate
              insights into potential risks and borrower profiles. Ultimately,
              it enhances risk management and fosters sustainable growth in the
              financial industry.
            </Typography>
            <Typography paragraph>Get your Credit Model Ready -</Typography>
            <Button
              className="primary-btn"
              endIcon={<ArrowRightAltIcon />}
              onClick={() => navigate("/contact-us")}
            >
              Contact Sales
            </Button>
          </Box>
          <Box
            sx={{
              width: "calc(40% - 2rem)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
       
          </Box>
        </Box>
      </ContentBox>
    </Box>
  );
};

export default CreditModeling;
