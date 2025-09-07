import React from "react";
import { HiExclamationCircle } from "react-icons/hi";
import "./ErrorCard.css";

const ErrorCard = ({ title = "Error", message, onRetry }) => {
  return (
    <div className="error-card" role="alert">
      <div className="error-icon">
        <HiExclamationCircle size={24} />
      </div>
      <div className="error-content">
        <h3 className="error-title">{title}</h3>
        {message && <p className="error-message">{message}</p>}
        {onRetry && (
          <div className="error-actions">
            <button className="error-retry" onClick={onRetry} type="button">
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorCard;
