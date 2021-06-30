import React from "react";

const LoadingBox = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
      }}
    >
      <i className="fas fa-fan fa-spin"></i>
    </div>
  );
};

export default LoadingBox;
