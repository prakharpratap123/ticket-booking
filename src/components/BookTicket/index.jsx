import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Tabs, Tab } from "@mui/material";
import { FlightTakeoff } from "@mui/icons-material";
import PricingCard from "./PricingCard";
import FlightDetails from "./FlightDetails";
import ContactDetails from "./ContactDetails";
import OtherDetails from "./OtherDetails";
import PaymentDetails from "./PaymentDetails";
import "./style.scss";

const BookTicket = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const active = new URLSearchParams(search).get("active");
  const [activeTab, setActiveTab] = useState(() => {
    return active || "travel-details";
  });

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
    navigate(`?active=${newValue}`);
  };

  const activePage = () => {
    switch (activeTab) {
      case "travel-details":
        return <FlightDetails />;
      case "contact-details":
        return <ContactDetails />;
      case "other-details":
        return <OtherDetails />;
      case "payments":
        return <PaymentDetails />;

      default:
        return <FlightDetails />;
    }
  };

  useEffect(() => {
    setActiveTab(active);
  }, [active]);

  return (
    <div id="book-ticket-details-container">
      <div className="header-section">
        <div className="title" onClick={() => navigate("/")}>
          <FlightTakeoff className="flight-icon" />
          Dummy Flight Tickets
        </div>
        <div className="support-btn">
          <Button>Get Support</Button>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <div style={{ borderBottom: "1px solid #d8d8d8" }}>
          <Tabs
            value={activeTab}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="travel-details" label="Travel Details" />
            <Tab value="contact-details" label="Passenger Details" />
            <Tab value="other-details" label="Other Details" />
            <Tab value="payments" label="Payments" />
          </Tabs>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6">{activePage()}</div>

        <div className="col-6">
          <PricingCard />
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
