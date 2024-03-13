import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

const Playground2 = () => {
  const { homeScreen } = useSelector((state) => state?.screen);
  const [components, setComponents] = useState(homeScreen);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newComponents = Array.from(components);
    const [reorderedItem] = newComponents.splice(result.source.index, 1);
    newComponents.splice(result.destination.index, 0, reorderedItem);

    setComponents(newComponents);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="components">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {components.map((component, index) => (
              <Draggable
                key={index}
                draggableId={String(index)}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {/* Render your component here */}
                    <div style={{ margin: "8px", padding: "8px", border: "1px solid black" }}>
                      {component.title}
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Playground2;
