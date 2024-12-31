import React, { useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import SwiftAndSecureComponent from "../components/SwiftAndSecure/SwiftAndSecure";
import PerksComponent from "../components/PerksComponent/PerksComponent";
import { useTheme } from "@mui/material/styles";
import SeamlessTravelComponent from "../components/SeamlessTravel/SeamlessTravel";
import ChoosePlanComponent from "../components/ChoosePlan/ChoosePlan";
import TravelBlogsComponent from "../components/TravelBlogs/TravelBlogs";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
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
          width: "100%",
        }}
      >
        <HeroComponent />
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <PerksComponent />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <SwiftAndSecureComponent />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ChoosePlanComponent />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <SeamlessTravelComponent />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TravelBlogsComponent />
      </Box>
    </Box>
  );
};

export default Home;
