import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4" style={{position: "fixed", width: "100%", bottom: 0}}>
      <p>&copy; {new Date().getFullYear()} Keeper App</p>
    </footer>
  );
};

export default Footer;
