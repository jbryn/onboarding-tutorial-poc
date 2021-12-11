import Nav from "./Nav";
import Steps from "./Steps";
import "./styles/App.css";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

const partners = [
  {
    id: "g2",
    image: "/2006110.webp",
  },
  { id: "fnatic", image: "/fnatic.png" },
  {
    id: "faze",
    image: "/faze.png",
  },
  // { id: "fnatic1", image: "/fnatic.png" },
  // {
  //   id: "faze1",
  //   image: "/faze.png",
  // },
  // {
  //   id: "g21",
  //   image: "/2006110.webp",
  // },
];

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "g2",
      image: "/2006110.webp",
    },
    {
      id: 2,
      name: "fnatic",
      image: "/fnatic.png",
    },
    {
      id: 3,
      name: "faze",
      image: "/faze.png",
    },
    {
      id: 4,
      name: "g2",
      image: "/2006110.webp",
    },
    {
      id: 5,
      name: "fnatic",
      image: "/fnatic.png",
    },
    {
      id: 6,
      name: "faze",
      image: "/faze.png",
    },
    {
      id: 7,
      name: "g2",
      image: "/2006110.webp",
    },
    {
      id: 8,
      name: "fnatic",
      image: "/fnatic.png",
    },
    {
      id: 9,
      name: "faze",
      image: "/faze.png",
    },
  ]);

  // const [items, setItems] = useState([{ id: "1" }, { id: "2" }, { id: "3" }]);
  // const [items, setItems] = useState(["1", "2", "3"]);

  return (
    <div className="root">
      <Nav />
      <div className="container">
        <div className="container-inner">
          <div className="page-header-step">
            <span className="blank">Partner rotators → </span>
            <span className="marked">Create new partner rotator</span>
          </div>
          <Steps />
          <DndContext
            onDragEnd={handleDragEnd}
            collisionDetection={closestCenter}
          >
            <SortableContext
              items={items}
              // strategy={horizontalListSortingStrategy}
            >
              <div className="page-wrapper">
                {items.map(({ id, name, image }) => (
                  <SortableItem key={id} id={id} name={name} image={image} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => {
          return item.id === active.id;
        });
        const newIndex = items.findIndex((item) => {
          return item.id === over.id;
        });
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

export default App;
