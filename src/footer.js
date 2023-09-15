import * as React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f2f2f2", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ margin: "0 10px" }}>© 2021 Your Company Name</p>
        <p style={{ margin: "0 10px" }}>Privacy Policy</p>
        <p style={{ margin: "0 10px" }}>Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;