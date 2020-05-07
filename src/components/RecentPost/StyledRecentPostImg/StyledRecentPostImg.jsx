import React, { useState } from "react";
import styled from "styled-components";
const StyledRecentPostImg = styled.div`
  // background-image: url(https://rankly-lambda-dev-serverlessdeploymentbucket-3wenuvv3t5b2.s3.amazonaws.com/recent_post.png);
  background-image: url(${(props) => props.post_image});
  flex: 1;
  background-size: cover;
`;

export default StyledRecentPostImg;
