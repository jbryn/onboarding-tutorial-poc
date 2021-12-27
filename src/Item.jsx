import React, { forwardRef } from "react";
import "./styles/SortableItem.css";

export const Item = forwardRef(({ id, ...props }, ref) => {
  const { image, name } = props;
  return (
    <div {...props} ref={ref} className="sortable-item">
      <img src={image} alt={name}></img>
    </div>
  );
});

export default Item;
