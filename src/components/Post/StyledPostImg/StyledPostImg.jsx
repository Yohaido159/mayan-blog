import styled from "styled-components";

const StyledPostImg = styled.div`
  background-image: url(${(props) => props.UrlImg});
  height: 30rem;
  width: 100%;
  background-size: cover;
  flex: 1 1 100%;
`;

export default StyledPostImg;
