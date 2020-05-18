import React, { useState } from "react";

import Portal from "../Portal/Portal";
import Login from "../Login/Login";
import "./Footer.styles.scss";

const Footer = (props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const openModal = () => {
    toggle();
  };
  return (
    <div className="footer row-my d-flex justify-content-center">
      <button onClick={openModal} className="btn btn-outline-primary text-white btn-lg align-self-start">
        Login
      </button>
      {open ? (
        <>
          <Portal>
            <Login open={open} toggle={toggle} />
          </Portal>
        </>
      ) : null}
    </div>
  );
};

export default Footer;
