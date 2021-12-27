import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./styles/SortableItem.css";
import Item from "./Item";

function SortableItem({ id, name, image }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? "100" : "auto",
    // opacity: isDragging ? 0.3 : 1,
    // border: isDragging ? "1px solid #ff574b" : "auto",
  };

  return (
    <div
      className="sortable-item"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <img src={image} alt={name}></img>
    </div>
  );
}

export default SortableItem;
