import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { Phone, Mail } from "@mui/icons-material";
import "./style.scss";

const PricingCard = () => {
  const [currency, setCurrency] = useState("usd");
  return (
    <div id="pricing-card">
      <div className="select-currency">
        <Select
          id="currency-select"
          value={currency}
          onChange={({ target: { value } }) => {
            setCurrency(value);
          }}
          size="small"
          sx={{
            width: "fit-content",
            marginTop: "5px",
            backgroundColor: "#F5F5FF",
            borderRadius: "4px",
            height: "30px",
          }}
        >
          <MenuItem value={"usd"}>USD</MenuItem>
          <MenuItem value={"inr"}>INR</MenuItem>
          <MenuItem value={"euro"}>EURO</MenuItem>
        </Select>
      </div>
      <div className="content">
        <div className="content-left">
          <div className="location-details">
            <div className="location-name">Lahore</div>
            <div className="location-code">LHR</div>
            <div className="journey-start-date">07/NOV 11:05</div>
          </div>
          <div className="stay-details">
            <div className="stay">Afaka</div>
            <div className="stay-start-date">07/NOV 2024</div>
          </div>

          <div className="stay-details">
            <div className="stay">Afaka</div>
            <div className="stay-start-date">07/NOV 2024</div>
          </div>

          <div className="passenger-details">
            <div className="person-name">Mr. Dawood Saddique</div>
            <div className="person-name">Mr. Mohamed Sohail </div>
          </div>

          <div className="contact-details">
            <div className="icon">
              <Phone sx={{ fill: "#5057EA" }} />
            </div>
            <div className="details">+92123456789</div>
          </div>

          <div className="amount">Amount</div>

          <div className="passenger-count">
            Passengers <span className="count">2</span>
          </div>
          <div className="gst-percentage">{"GST (18%)"}</div>

          <div className="total-amount">TOTAL AMOUNT</div>
        </div>

        <div className="content-right">
          <div className="location-details">
            <div className="location-name">Istanbul</div>
            <div className="location-code">IST</div>
            <div className="journey-start-date">07/NOV 11:05</div>
          </div>
          <div className="stay-details">
            <div className="stay">Afaka</div>
            <div className="stay-start-date">07/NOV 2024</div>
          </div>

          <div className="stay-details">
            <div className="stay">Afaka</div>
            <div className="stay-start-date">07/NOV 2024</div>
          </div>

          <div className="passenger-details">
            <div className="person-name">Mr. Dawood Saddique</div>
            <div className="person-name">Mr. Mohamed Sohail </div>
          </div>

          <div className="contact-details">
            <div className="icon">
              <Mail sx={{ fill: "#5057EA" }} />
            </div>
            <div className="details">info@gmail.com</div>
          </div>

          <div className="amount">Rs. 400.00</div>

          <div className="passenger-count">Rs.4000.00</div>
          <div className="gst-percentage">Rs.72.00s</div>

          <div className="total-amount">$16.00</div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
