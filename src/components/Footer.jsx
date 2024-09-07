import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-line"></div>
      <footer>
        <p>&copy; {currentYear} Made by Darlin, All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
