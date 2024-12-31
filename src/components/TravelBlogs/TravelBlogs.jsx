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
import EastIcon from "@mui/icons-material/East";
import blogImage1 from "../../assets/blogImage.jpeg";
import WestIcon from "@mui/icons-material/West";
import EditIcon from "@mui/icons-material/Edit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const blogData = [
  {
    blogImage: blogImage1,
    author: "Jane Houstun",
    date: "21 August, 2023",
    readingLenght: "7",
    title: "Top 5 Tips for Hassle-Free Airport Check-Ins",
    details:
      "Discover essential tips to breeze through airport security and check-ins, from organizing your documents to understanding airline policies...",
  },
  {
    blogImage: blogImage1,
    author: "Jane Houstun",
    date: "21 August, 2023",
    readingLenght: "7",
    title: "Top 5 Tips for Hassle-Free Airport Check-Ins",
    details:
      "Discover essential tips to breeze through airport security and check-ins, from organizing your documents to understanding airline policies...",
  },
  {
    blogImage: blogImage1,
    author: "Jane Houstun",
    date: "21 August, 2023",
    readingLenght: "7",
    title: "Top 5 Tips for Hassle-Free Airport Check-Ins",
    details:
      "Discover essential tips to breeze through airport security and check-ins, from organizing your documents to understanding airline policies...",
  },
  {
    blogImage: blogImage1,
    author: "Jane Houstun",
    date: "21 August, 2023",
    readingLenght: "7",
    title: "Top 5 Tips for Hassle-Free Airport Check-Ins",
    details:
      "Discover essential tips to breeze through airport security and check-ins, from organizing your documents to understanding airline policies...",
  },
  {
    blogImage: blogImage1,
    author: "Jane Houstun",
    date: "21 August, 2023",
    readingLenght: "7",
    title: "Top 5 Tips for Hassle-Free Airport Check-Ins",
    details:
      "Discover essential tips to breeze through airport security and check-ins, from organizing your documents to understanding airline policies...",
  },
];

const TravelBlogsComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "4.375rem 9.375rem",
        backgroundColor: "var(--primary-white)",
        color: "var(--primary-text-color)",
        // width: "calc(100% - 18.75rem)",
        width: "calc(100%)",
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
              width: "100%",
            }}
          >
            Explore Our Travel Blog{" "}
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
              boxShadow: "0px 3.25px 16.27px 0px #C8C8C840",
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

      {/* blogs section */}
      <Box
        mb={7}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            height: "2px", // Scrollbar height
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--tertiary-font-color)", // Scrollbar color
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent", // Track background
          },
        }}
      >
        {blogData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "502px",
              borderRadius: "1.25rem",
              mr: 4,
            }}
          >
            <img
              src={item.blogImage}
              alt="blogImage"
              style={{
                width: 502,
                height: 401,
                borderRadius: "1.25rem 1.25rem 0 0",
              }}
            />
            <Box
              sx={{
                padding: "1.75rem 1.5rem",
                width: "calc(100% - 3rem)",
                borderRadius: "0 0 1.25rem 1.25rem",
                backgroundColor: "#F9F9F9",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <EditIcon sx={{ color: "var(--primary-blue)" }} />
                  <Typography
                    sx={{
                      color: "#0B051D",
                      fontSize: "1rem",
                      fontWeight: 500,
                      ml: 1,
                    }}
                  >
                    {item.author}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CalendarMonthIcon sx={{ color: "var(--primary-blue)" }} />
                  <Typography
                    sx={{
                      color: "#0B051D",
                      fontSize: "1rem",
                      fontWeight: 500,
                      ml: 1,
                    }}
                  >
                    {item.date}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FiberManualRecordIcon
                    sx={{ color: "var(--primary-blue)", fontSize: "0.5rem" }}
                  />
                  <Typography
                    sx={{
                      color: "#0B051D",
                      fontSize: "1rem",
                      fontWeight: 500,
                      ml: 1,
                    }}
                  >
                    {item.readingLenght} min read
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  margin: "1.375rem 0 0.75rem 0",
                  fontSize: "2rem",
                  fontWeight: 600,
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
      <Box sx={{ textAlign: "center" }}>
        <Button className="primary-btn">See All Blogs</Button>
      </Box>
    </Box>
  );
};

export default TravelBlogsComponent;
