import React from "react";

const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">
        <span className="text-amber-600">Port</span>folio
      </h1>
      <div>
        <p className="text-center md:text-left text-base/loose opacity-50">
          &copy; 2025 Feriardus Banggur. All rights reserved.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/TUTURUGA911">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="linkedin.com/in/feriardus-orlan-banggur-3100b8285">
          <i className="ri-linkedin-box-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/fee_rry/">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://www.youtube.com/@Ktsu-LoF">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
