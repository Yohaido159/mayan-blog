import React, { useState } from "react";

import styled from "styled-components";

const StyledCategoryImg = styled.div`
  transform: scale(1);
  transition: all 0.2s;
  background-size: 100%;
  background-size: cover;
  background-image: url(${(props) => props.UrlImg});
  height: 100%;
  width: 100%;
  background-position-x: -10px;

  &:hover {
    transform: scale(1.1);

    background-position-x: -10px;
    background-position-y: -10px;
  }
`;
export default StyledCategoryImg;
