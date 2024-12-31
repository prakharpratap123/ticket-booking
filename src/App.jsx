import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  BrowserRouter as Router,
  Navigate,
  Link,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { lightTheme, darkTheme } from "./theme";
import { useThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Faqs from "./pages/Faqs";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import Logo from "./assets/dummyFlightOnlyLogo.jpeg";
import TermsAndConditions from "./pages/TermsAndConditions";
import BookTicket from "./components/BookTicket";
import { useLoaderContext } from "./context/LoaderContext";

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

const LayoutWithoutHeaderFooter = () => {
  return (
    <div style={{ flex: 1 }}>
      <Routes>
        <Route path="/book-tickets" element={<BookTicket />} />
      </Routes>
    </div>
  );
};

const LayoutWrapper = () => {
  const location = useLocation();
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  useEffect(() => {
    const noHeaderFooterPaths = ["/book-tickets"];
    const hideHeaderFooter = noHeaderFooterPaths.includes(location.pathname);
    setShowHeaderFooter(!hideHeaderFooter);
  }, [location.pathname]);

  return showHeaderFooter ? <Layout /> : <LayoutWithoutHeaderFooter />;
};

const App = () => {
  const { theme } = useThemeContext();
  const { isLoading } = useLoaderContext();

  return (
    <div
      className="mainWrapper"
      style={{
        // background: appliedTheme.background,
        // color: appliedTheme.color,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Router>
        <LayoutWrapper />
        {isLoading && (
          <Box className="loaderWrapper">
            <img
              src={Logo}
              alt="spinner-logo"
              width={100}
              height={100}
              className="spinner"
            />
          </Box>
        )}
      </Router>
    </div>
  );
};

export default App;
