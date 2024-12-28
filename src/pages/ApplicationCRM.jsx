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

const ApplicationCRM = () => {
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
          {/* ApplicationCRM Us Text */}
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
            Application, CRM & Website Development
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
              Application, CRM & Website Development
            </Typography>
          </Breadcrumbs>
        </Box>
      </BackgroundBox>

      {/* Content Section */}
      <ContentBox>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Accredit Technologies Private Limited
        </Typography>
        <Typography paragraph>
          Accredit Technologies specializes in application development, CRM
          development, and website creation for NBFCs, DSAs, financial
          institutions, and fintechs, delivering high-quality solutions tailored
          to diverse business needs. Our extensive experience and expertise
          enable us to develop visually stunning and highly functional websites
          and applications that drive business success.
        </Typography>
        <Typography paragraph>
          Our skilled team focuses on creating intuitive and engaging user
          interfaces, prioritizing user experience in every project. We employ
          the latest design trends, responsive layouts, and advanced
          technologies to ensure that every website is visually appealing,
          mobile-friendly, and optimized for search engines, making it
          accessible to a broader audience.
        </Typography>
        <Typography paragraph>
          In application and CRM development, we leverage our proficiency in
          various programming languages and frameworks to build robust,
          scalable, and customized solutions that meet our clients&apos;
          specific requirements. Whether developing a mobile app or a web-based
          platform, we prioritize seamless performance, security, and user
          experience, ensuring that every product we create offers an
          exceptional experience.
        </Typography>
        <Typography paragraph>
          By partnering with Accredit Technologies, clients can expect solutions
          that not only meet but exceed their expectations. We pride ourselves
          on our commitment to delivering projects on time and within budget,
          establishing ourselves as the preferred choice for exceptional website
          design, application development, and CRM development services in the
          financial sector.
        </Typography>
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

export default ApplicationCRM;
