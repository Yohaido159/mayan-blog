import React, { useState } from "react";
import styled from "styled-components";

const StyledPostImgContent = styled.div`
  width: 20rem;
  height: 20rem;
  background-image: url(${(props) => props.urlImg});
  background-size: cover;
`;
export default StyledPostImgContent;
