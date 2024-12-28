import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import bgImage from "../../assets/fifthSectionBg.svg";
import card1Bg from "../../assets/section5card1.jpeg";
import card2Bg from "../../assets/section5card2.jpeg";
import card3Bg from "../../assets/section5card3.jpeg";
import card4Bg from "../../assets/section5card4.jpeg";
import flightIcon from "../../assets/section5FlightIcon.jpeg";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const data = [
  {
    cardBgImage: card1Bg,
    title: "Visa Applicants",
    details:
      "Our Dummy Ticket service is ideal for visa applicants who need proof of travel for their application process. We offer genuine, verifiable Dummy Ticket bookings without the full cost, helping you meet documentation requirements quickly and affordably.",
  },
  {
    cardBgImage: card2Bg,
    title: "Digital Nomads",
    details:
      "For digital nomads, our dummy ticket service provides the flexibility you need to secure travel documentation without committing to full-priced tickets. Whether you're moving between countries or need proof of onward travel, we make it simple and cost-effective.",
  },
  {
    cardBgImage: card3Bg,
    title: "Frequent Traveler",
    details:
      "For frequent travelers with uncertain plans, our dummy flight ticket offers the convenience of a genuine flight reservation without the risk of hefty cancellation charges. Book your dummy ticket now with us worry-free, and when your plans are set, you can confirm your final ticket later.",
  },
  {
    cardBgImage: card4Bg,
    title: "Prospective Immigrants",
    details:
      "Our dummy flight ticket can help to prospective immigrants who need proof of return for visa or immigration check. We provide genuine reservations that help you fulfil immigration requirements with ease and at a fraction of the cost of a full-ticket purchase.",
  },
];

const SeamlessTravelComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "4.375rem 9.375rem",
        backgroundColor: "#F5F5FF",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "var(--primary-text-color)",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "1.125rem",
              fontWeight: 600,
              color: "var(--primary-blue)",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            SEAMLESS TRAVEL{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "3.25rem",
              fontWeight: 600,
              marginBottom: "3.75rem",
              width: "50%",
            }}
          >
            Dummy Flight Ticket Will Be The Best For{" "}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{
              mr: 4,
              background: "var(--primary-white)",
              color: "#75797E",
              width: "74px",
              height: "74px",
            }}
          >
            <WestIcon />
          </IconButton>
          <IconButton
            sx={{
              background: "var(--primary-blue)",
              color: "var(--primary-white)",
              width: "74px",
              height: "74px",
            }}
          >
            <EastIcon />
          </IconButton>
        </Box>
      </Box>

      {/* cards section */}
      <Box
        mb={7}
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              width: "calc(25% - 22px - 3rem)",
              flexDirection: "column",
              alignItems: "center",
              height: "465px",
              maxWidth: "381px",
              padding: "2.75rem 1.5rem",
              borderRadius: "1.875rem",
              backgroundImage: `
              linear-gradient(
                to bottom, 
                rgba(0, 0, 0, 0), 
                rgba(0, 0, 0, 1)
              ),
              url(${item.cardBgImage})
            `,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: "1rem",
                margin: "1.25rem 0",
                color: "var(--primary-white)",
                marginTop: "auto",
              }}
            >
              {item.details}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  fontSize: "1.375rem",
                  color: "var(--primary-white)",
                }}
              >
                {item.title}
              </Typography>
              <img
                src={flightIcon}
                alt="flightIcon"
                style={{ width: 46, height: 46 }}
              />
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button className="primary-btn">Book Now</Button>
      </Box>
    </Box>
  );
};

export default SeamlessTravelComponent;
