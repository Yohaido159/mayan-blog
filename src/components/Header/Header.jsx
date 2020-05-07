import React, { useState, useEffect } from "react";
import "./Header.styles.scss";

import StyledHero from "./StyledHero/StyledHero";
import StyledSmall1 from "./StyledSmall1/StyledSmall1";
import StyledSmall2 from "./StyledSmall2/StyledSmall2";

import axios from "axios";

const Header = (props) => {
  const [urlBig, setUrlBig] = useState("");
  const [urlSmall1, setUrlSmall1] = useState("");
  const [urlSmall2, setUrlSmall2] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://127.0.0.1:8000/api/hero/");
      setUrlBig(data.data[0].hero_image_big);
      setUrlSmall1(data.data[0].hero_image_small1);
      setUrlSmall2(data.data[0].hero_image_small2);
    };
    fetchData();
  }, []);

  return (
    <div className="header row-my">
      <div className="continer-1">
        <StyledSmall1 img_url={urlSmall1}>
          <div className="header__small continer-1-1 "></div>
        </StyledSmall1>
        <StyledSmall2 img_url={urlSmall2}>
          <div className="header__small continer-1-2 "></div>
        </StyledSmall2>
      </div>
      <div className="continer-2">
        <StyledHero img_url={urlBig}>
          <div className="header__big "></div>
        </StyledHero>
      </div>
    </div>
  );
};

export default Header;
