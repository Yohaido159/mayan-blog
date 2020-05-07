import React, { useState } from "react";

import { SortableElement } from "react-sortable-hoc";

import "./DragImg.styles.scss";
import StyledPostImgContent from "../Post/StyledPostImgContent/StyledPostImgContent";

const DragImg = SortableElement(({ image }) => {
  return (
    <div className="post_image">
      <StyledPostImgContent urlImg={image.post_image}>
        <div className="post_image__img"></div>
      </StyledPostImgContent>
    </div>
  );
});

export default DragImg;
