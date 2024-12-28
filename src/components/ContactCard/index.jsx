import React from "react";
import "./style.scss";

const ContactCard = ({ icons, title, content, action }) => {
  return (
    <div id="contact-card-container">
      <div>
        <div className="icon-wrapper">{icons}</div>
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
      <div>{action}</div>
    </div>
  );
};

export default ContactCard;
