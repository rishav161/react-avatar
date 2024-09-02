import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-4" id="footer">
      <div className="container mx-auto text-center">
        <p className="text-sm font-montserrat mb-2">
          © {new Date().getFullYear()} Rishav Jaiswal. All rights reserved.
        </p>
        <a
          href="mailto:rishavjaiswal864@gmail.com"
          className="text-black-500 hover:text-blue-500 text-md"
        >
          Contact Me
        </a>
      </div>
    </footer>
  );
};

export default Footer;
