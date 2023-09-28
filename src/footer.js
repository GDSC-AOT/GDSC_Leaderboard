import * as React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#4285f4",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px",
    fontWeight: "bold",
  };

  return (
    <footer style={footerStyle}>
      <div>
        <p style={{ margin: "0" }}>© 2023 GDSC AOT</p>
        <p>
          <a style={linkStyle} href="https://policies.google.com/privacy">
            Privacy Policy
          </a>
          |
          <a style={linkStyle} href="https://policies.google.com/terms">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
