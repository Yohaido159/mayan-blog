import React, { useState } from "react";
import styled from "styled-components";

const StyledSmall1 = styled.div`
  width: 100%;
  height: 50%;
  background-image: url(${(props) => props.img_url});
  background-size: cover;
  background-size: 100%;
  transition: all 0.2s;

  &:hover {
    background-size: 105%;
    background-position-x: -10px;
    background-position-y: -10px;
  }
`;

export default StyledSmall1;
