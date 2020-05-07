import React, { useState } from "react";
import styled from "styled-components";

const StyledSmall2 = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 50%;
  background-image: url(${(props) => props.img_url});
  background-size: cover;
  background-position-y: -229px;
  transition: all 0.2s;
  background-size: 100%;
  &:hover {
    background-size: 105%;
    background-position-x: -10px;
    background-position-y: -240px;
  }
`;

export default StyledSmall2;
