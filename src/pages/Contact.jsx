import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Breadcrumbs, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import "../index.css";
import { contactUsApi } from "../services/contactService";

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

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && (isNaN(value) || value.length > 10)) {
      return;
    }

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    contactUsApi({
      name: formValues.name,
      email: formValues.email,
      phoneNumber: formValues.phone,
      city: formValues.city,
      state: formValues.state,
      message: formValues.message,
    })
      .then((res) => {
        console.log("contact res : ", res);
        if (res.statusCode === 200) {
          console.log("contact res : ", res.data);
        }
      })
      .catch((error) =>
        console.error("error in Contact handle submit : ", error)
      );
    console.log("Form submitted:", formValues);
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
          {/* Contact Us Header */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              background:
                "linear-gradient(135deg, #dff7fd, #bbed98, #e9e678, #fbc5c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Us
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
              Contact Us
            </Typography>
          </Breadcrumbs>
        </Box>
      </BackgroundBox>

      {/* Contact Form Section */}
      <Box sx={{ padding: "2rem", margin: "2rem auto", maxWidth: "80%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box
            sx={{
              flex: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "var(--secondary-text-color)",
              }}
            >
              Address
            </Typography>
            <Typography variant="body2">
              C3-501, Spring Meadows, Techzone-4, Gautam Buddha Nagar, Uttar
              Pradesh (IN), 201009{" "}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mt: 3,
                mb: 2,
                fontWeight: "bold",
                color: "var(--secondary-text-color)",
              }}
            >
              Contact
            </Typography>
            <Typography variant="body2" mt={1}>
              Email: <strong>info@accredittechnologies.com</strong>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mt: 3,
                mb: 2,
                fontWeight: "bold",
                color: "var(--secondary-text-color)",
              }}
            >
              Hour of Operation
            </Typography>
            <Typography variant="body2">
              Monday - Saturday: 10:00 AM - 07:00 PM
            </Typography>
          </Box>

          {/* Right Column: Contact Form */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "var(--secondary-text-color)",
              }}
            >
              Questions? Feel free to contact us.
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  mb: 2,
                }}
              >
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  required
                  value={formValues.name}
                  onChange={handleInputChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderColor: "rgba(0, 48, 110, 0.1)",
                    },
                  }}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  required
                  value={formValues.email}
                  onChange={handleInputChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderColor: "rgba(0, 48, 110, 0.1)",
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  mb: 2,
                }}
              >
                <TextField
                  label="Phone"
                  name="phone"
                  fullWidth
                  required
                  value={formValues.phone}
                  onChange={handleInputChange}
                  inputProps={{ maxLength: 10 }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderColor: "rgba(0, 48, 110, 0.1)",
                    },
                  }}
                />
                <TextField
                  label="City"
                  name="city"
                  fullWidth
                  required
                  value={formValues.city}
                  onChange={handleInputChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderColor: "rgba(0, 48, 110, 0.1)",
                    },
                  }}
                />
              </Box>

              <TextField
                label="State"
                name="state"
                fullWidth
                required
                value={formValues.state}
                onChange={handleInputChange}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderColor: "rgba(0, 48, 110, 0.1)",
                  },
                }}
              />
              <TextField
                label="Message"
                name="message"
                fullWidth
                multiline
                rows={4}
                value={formValues.message}
                onChange={handleInputChange}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderColor: "rgba(0, 48, 110, 0.1)",
                  },
                }}
              />
              <Button
                color="primary"
                className="secondary-btn"
                fullWidth
                type="submit"
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Google Map */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "var(--secondary-text-color)",
            }}
          >
            Find Us Here:
          </Typography>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.36809976309!2d77.44254077495516!3d28.588731986069305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8ba81555555%3A0x59ffb84f9207816c!2sSpring%20Meadows!5e0!3m2!1sen!2sin!4v1730309991633!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
