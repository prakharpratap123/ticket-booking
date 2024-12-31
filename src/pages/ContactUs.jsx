import React, { useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Phone,
  ArrowRightAlt,
  AccessTime,
  Business,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import ContactCard from "../components/ContactCard";

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
          Contact Us
        </Box>
      </Box>

      <Box
        sx={{
          padding: "2.5rem 7rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "30px",
          backgroundColor: "#fff",
          paddingTop: "100px",
        }}
      >
        <div className="row">
          <div className="col-4">
            <ContactCard
              title={"Contact Us"}
              icons={<Phone />}
              content={
                "Phone : (+256) 214 203 215 \n Email : help@dummyflightticket.com"
              }
              action={
                <Button variant="text" endIcon={<ArrowRightAlt />}>
                  Get Started
                </Button>
              }
            />
          </div>

          <div className="col-4">
            <ContactCard
              title={"Address Here"}
              icons={<Business />}
              content={`Head Office : A62, Sec-2, Noida,  Gautm Budhdha Nagar, Uttar Pradesh, India
                 Branch Office : Shams Business Center, Sharjah Media City free Zone, Al Messaned, Sharjah, UAE.`}
              action={
                <Button variant="text" endIcon={<ArrowRightAlt />}>
                  Get Started
                </Button>
              }
            />
          </div>

          <div className="col-4">
            <ContactCard
              title={"Working Hours"}
              icons={<AccessTime />}
              content={
                "All Days: 24 x 7  \n We are available 24/7, including on holidays and festivals, to meet your travel needs."
              }
              action={
                <Button variant="text" endIcon={<ArrowRightAlt />}>
                  Get Started
                </Button>
              }
            />
          </div>
        </div>
        {/* <ContactCard
          title={"Contact Us"}
          icons={<Phone />}
          content={
            "Phone : (+256) 214 203 215 \n Email : help@dummyflightticket.com"
          }
          action={
            <Button variant="text" endIcon={<ArrowRightAlt />}>
              Get Started
            </Button>
          }
        />

        <ContactCard
          title={"Address Here"}
          icons={<Business />}
          content={`Head Office : A62, Sec-2, Noida,  Gautm Budhdha Nagar, Uttar Pradesh, India
                 Branch Office : Shams Business Center, Sharjah Media City free Zone, Al Messaned, Sharjah, UAE.`}
          action={
            <Button variant="text" endIcon={<ArrowRightAlt />}>
              Get Started
            </Button>
          }
        />
        <ContactCard
          title={"Working Hours"}
          icons={<AccessTime />}
          content={
            "All Days: 24 x 7  \n We are available 24/7, including on holidays and festivals, to meet your travel needs."
          }
          action={
            <Button variant="text" endIcon={<ArrowRightAlt />}>
              Get Started
            </Button>
          }
        /> */}
      </Box>

      <Box
        style={{
          height: "835px",
          padding: "2.5rem 7rem",
          backgroundColor: "#fff",
        }}
      >
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.527693537645!2d-122.08424968468163!3d37.42199957982527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e49c2b2adf%3A0xf4dbf6048d2b244b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1604083887022!5m2!1sen!2sus"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default ContactUs;
