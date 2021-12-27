import Nav from "./Nav";
import Steps from "./Steps";
import "./styles/App.css";
import { useState } from "react";
import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import Item from "./Item";
import Joyride from "react-joyride";

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

  const [steps, setSteps] = useState([
    {
      target: "#campaigns",
      content:
        "Set up a campaign remotely for selected streamers and start receiving a detailed report",
    },
    {
      target: "#overlays",
      content:
        "Customise, preview and archive stream overlays for individual streamers",
    },
    {
      target: "#streamers",
      content:
        "Comfortably manage all invited streamers in one, nifty space. Sort streamers by various metrics to easily track activity and promotional effort.",
    },
    {
      target: "#monitoring",
      content:
        "Directly view livestreams from added streamers and obtain clips with ease (Twitch only). Witness your campaigns coming to life!",
    },
    { target: "#statistics", content: "Statistics ... " },
    { target: "#reports", content: "Reports ... " },
    {
      target: "#faq",
      content:
        "Have any doubts? You can quickly find possible answers to common problems here. Contact us at (insert Streamcoi admin contact details here) if the FAQ does not mention the problem.",
    },
  ]);

  const [activeId, setActiveId] = useState(null);

  return (
    <div className="root">
      <Nav />
      <div className="container">
        <div className="container-inner">
          <Joyride
            steps={steps}
            continuous={true}
            showProgress={true}
            run={true}
            styles={{
              options: {
                backgroundColor: "#444444",
                textColor: "white",
                primaryColor: "#FF4E47",
              },
            }}
          ></Joyride>
          {/* <div className="page-header-step">
            <span className="blank">Partner rotators → </span>
            <span className="marked">Create new partner rotator</span>
          </div> */}
          {/* <Steps /> */}
          {/* <DndContext
            onDragStart={handleDragStart}
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
          </DndContext> */}
        </div>
      </div>
    </div>
  );

  function handleDragStart(event) {
    const { active } = event;
    setActiveId(active.id);
  }

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
