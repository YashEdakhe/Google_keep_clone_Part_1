import React from "react";

const year = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>Created By Yash Edakhe</p>
      <p>Copyright {year}</p>{" "}
    </footer>
  );
}

export default Footer;
