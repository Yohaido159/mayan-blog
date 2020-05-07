import React, { useState, useEffect } from "react";
import "./AboutMe.styles.scss";

import StyledAboutMe from "./StyledAboutMe/StyledAboutMe";

import axios from "axios";

const AboutMe = (props) => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://127.0.0.1:8000/api/about-me/");
      setAbout(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="aboutMe">
      {about[0] ? (
        <>
          <StyledAboutMe UrlImg={about[0].image}>
            <div className="aboutMe__avatar"></div>
          </StyledAboutMe>
          <div className="aboutMe__title">{about[0].title}</div>
          <div className="aboutMe__content">{about[0].content}</div>
        </>
      ) : (
        <h4> Loading </h4>
      )}
    </div>
  );
};

export default AboutMe;
