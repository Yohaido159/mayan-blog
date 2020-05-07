import React, { useState } from "react";
import "./Logo.styles.scss";

import { Link } from "react-router-dom";

import mayanLogo from "../../photo/mayanv1.png";

const Logo = (props) => {
  return (
    <Link to="/">
      <div className="logo">
        <img height="300px" src={mayanLogo} />
      </div>
    </Link>
  );
};

export default Logo;
