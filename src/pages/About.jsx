import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import clip1 from "../assets/aboutClip1.jpeg";
import clip2 from "../assets/aboutClip2.jpeg";
import jsLogo1 from "../assets/jsLogo1.jpeg";
import jsLogo2 from "../assets/jsLogo2.jpeg";
import jsLogo3 from "../assets/jsLogo3.jpeg";
import AboutKeyFeatureComponent from "../components/AboutKeyFeature/AboutKeyFeature";

const journeySimplifiedData = [
  {
    logo: jsLogo1,
    title: "IATA accredited travel agent",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    logo: jsLogo2,
    title: "Helping travelers since 2001",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    logo: jsLogo3,
    title: "Experienced Staff",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", paddingBottom: "20rem" }}
    >
      <Box
        sx={{
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--secondary-background-color)",
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: "3.75rem" }}>
          About Us
        </Typography>
      </Box>
      <Box
        sx={{
          width: "calc(100% - 10.3rem)",
          display: "flex",
          justifyContent: "space-between",
          padding: "7.6rem 10.3rem 7.6rem 0",
        }}
      >
        <Box sx={{ width: "calc(50% - 1.5rem)" }}>
          <img src={clip1} alt="clip1" style={{ width: "100%" }} />
        </Box>
        <Box sx={{ width: "calc(50% - 1.5rem)" }}>
          <Typography
            sx={{
              fontSize: "1.125rem",
              fontWeight: 600,
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              color: "var(--primary-blue)",
            }}
          >
            ABOUT DUMMY FLIGHT{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "3.25rem",
              fontWeight: 600,
              marginBottom: "1.375rem",
            }}
          >
            Your Gateway to Affordable Travel Solutions
          </Typography>
          <Typography
            sx={{
              fontSize: "1.125rem",
              fontWeight: 400,
              marginBottom: "0.8rem",
              color: "var(--tertiary-text-color)",
            }}
          >
            At Dummyflightticket.com, we specialize in providing genuine flight
            reservations for travelers who need proof of travel for visa
            applications, immigration, and other travel documentation
            requirements. Since our inception in 2018, we have been dedicated to
            offering cost-effective and flexible solutions to meet the diverse
            needs of our customers, including visa applicants, digital nomads,
            frequent travelers, and prospective immigrants.
          </Typography>
          <Typography
            sx={{
              fontSize: "1.125rem",
              fontWeight: 400,
              marginBottom: "0.875rem",
              color: "var(--tertiary-text-color)",
            }}
          >
            We understand that securing a flight ticket can often be a costly
            and uncertain process, especially when travel plans are not yet
            finalized. That’s why we offer a unique service where we book
            full-priced flight tickets on your behalf, allowing you to secure a
            reservation without the burden of paying the full price upfront.
            Once you reach your destination, we handle the cancellation and
            ensure you only pay for the cancellation charges and a small service
            fee, saving you both time and money.
          </Typography>
          <Button className="primary-btn">Book Now</Button>
        </Box>
      </Box>
      <AboutKeyFeatureComponent />
      <Box
        sx={{
          width: "calc(100% - 10.3rem)",
          display: "flex",
          justifyContent: "space-between",
          padding: "7.6rem 0 7.6rem 10.3rem",
        }}
      >
        <Box sx={{ width: "calc(50% - 1.5rem)" }}>
          <Typography
            sx={{
              fontSize: "1.125rem",
              fontWeight: 600,
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              color: "var(--primary-blue)",
            }}
          >
            your journey simplified{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "3.25rem",
              fontWeight: 600,
              marginBottom: "1.375rem",
            }}
          >
            Why Choose Dummy Flight Ticket{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.125rem",
              fontWeight: 400,
              marginBottom: "1.7rem",
              color: "var(--tertiary-text-color)",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </Typography>

          <Box>
            {journeySimplifiedData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 5,
                }}
              >
                <img
                  src={item.logo}
                  alt="logo"
                  style={{ width: 106, height: 106 }}
                />
                <Box sx={{ marginLeft: "1.375rem", width: "60%" }}>
                  <Typography
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "#000000",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.125rem",
                      fontWeight: 400,
                      color: "var(--tertiary-text-color)",
                    }}
                  >
                    {item.details}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Button className="primary-btn">Book Now</Button>
        </Box>
        <Box sx={{ width: "calc(50% - 1.5rem)" }}>
          <img src={clip2} alt="clip2" style={{ width: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
