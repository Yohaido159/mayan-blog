import React, { useState } from "react";

import styled from "styled-components";

const StyledAboutMe = styled.div`
  background-color: red;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background-image: url(${(props) => props.UrlImg});
  background-size: cover;
  background-position-x: -5rem;
`;

export default StyledAboutMe;
