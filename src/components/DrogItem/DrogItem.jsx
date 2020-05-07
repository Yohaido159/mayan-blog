import React, { useState } from "react";

import { SortableContainer } from "react-sortable-hoc";

import DragImg from "../DragImg/DragImg";

import "./DrogItem.styles.scss";

const DrogItem = SortableContainer(({ images }) => {
  return (
    <>
      {images ? (
        <div className="drogItem">
          {images.map((image, i) => (
            <DragImg index={i} image={image} />
          ))}
        </div>
      ) : (
        <h3>loading</h3>
      )}
    </>
  );
});

export default DrogItem;
