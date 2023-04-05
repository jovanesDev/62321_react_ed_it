import React from "react";

const Spinner = () => {
  return (
    <div className="container-fluid fixed h-screen">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
