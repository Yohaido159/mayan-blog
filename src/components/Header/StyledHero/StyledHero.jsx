import React, { useState } from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  height: 62rem;
  width: 60rem;
  background-image: url(${(props) => props.img_url});
  background-size: cover;
  background-position-y: -93px;
  background-size: 100%;
  transition: all 0.2s;

  &:hover {
    background-size: 105%;
    background-position-y: -113px;
    background-position-x: -10px;
  }
`;

export default StyledHero;
