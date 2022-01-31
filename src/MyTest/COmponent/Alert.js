import React, { useState } from "react";
import "../styles/style.css";

export const Alert = ({ exitPopup }) => {
  return (
    <div className="alert-message">
      <div>Cart Added</div>
      <div className="btn" onClick={() => exitPopup(false)}>
        x
      </div>
    </div>
  );
};
