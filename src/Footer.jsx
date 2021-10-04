import React from "react";

const year = new Date().getFullYear();
function Footer() {
  return (
    <div>
      <p>Created By Yash Edakhe</p>
      <p>Copyright {year}</p>{" "}
    </div>
  );
}

export default Footer;
