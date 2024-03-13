import React, { useState } from "react";
import ViewAgendaTwoToneIcon from "@mui/icons-material/ViewAgendaTwoTone";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useSelector } from "react-redux";
import banner from "../assets/banner.png";
import Header1 from "../components/Headers/Header1";
import BoxContent from "../components/Box&Content/BoxContent";
import CTASmall from "../components/CTASmall/CTASmall";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { uppdateHomeScreen } from "../redux/slice/fetchScreen";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

export const screenElement = [
  {
    icon: <ViewAgendaTwoToneIcon className="text-white" />,
    title: "Header",
    elements: {
      type: "header",
      title: `Where Ideas Transform into Extraordinary Apps."`,
      subTitle: `"Empowering Businesses through Cutting-Edge Software Solutions."`,
      btnTitle: "Transform your vission into reality",
      btnLink: "/home",
    },
  },
  {
    icon: <ViewAgendaTwoToneIcon className="text-white" />,
    title: "CTASmall",
    elements: {
      type: "CTASmall",
      title: `Build Your Future"`,
      subTitle: `Partner with us for tailored software solutions. Your success is our priority`,
      BtnTitle: "Stay level up with AI & ML",
      BtnLink: "",
    },
  },
  {
    icon: <ViewAgendaTwoToneIcon className="text-white" />,
    title: "Box & Content",
    elements: {
      type: "box&Content",
      title: `AI, Machine Learning and Data Science`,
      subTitle: `Using next-gen technology to deliver futuristic mobile apps.`,
      paragraph: `Using next-gen technology to deliver futuristic mobile apps.`,
      BtnTitle: "Stay level up with AI & ML",
      BtnLink: "",
      boxes: [
        {
          title: "Data & Al strategy",
          imgLink: "",
        },
        {
          title: "Data & Al strategy",
          imgLink: "",
        },
        {
          title: "Data & Al strategy",
          imgLink: "",
        },
        {
          title: "Data & Al strategy",
          imgLink: "",
        },
        {
          title: "Data & Al strategy",
          imgLink: "",
        },
        {
          title: "Data & Al strategy",
          imgLink: "",
        },
      ],
    },
  },
];

const Playground = () => {
  const { homeScreen } = useSelector((state) => state?.screen);
  const [isLeftSideBarOpen, setIsLeftSideBarOpen] = useState(false);
  const [screens, setScreens] = useState(homeScreen);
  const [editableIndex, setEditableIndex] = useState(null);
  const [isDragOn, setIsDrapOn] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const dispatch = useDispatch();

  const handleOpenFormElement = () => {
    setIsLeftSideBarOpen(!isLeftSideBarOpen);
  };

  const handleDrop = (event) => {
    setIsDrapOn(true);
    event.preventDefault();
    const draggedIndex = event.dataTransfer.getData("index");
    const droppedElement = screenElement[draggedIndex];
    console.log(droppedElement?.elements);
    setScreens([...screens, droppedElement?.elements]);
    dispatch(uppdateHomeScreen(screens));
    // console.log(homeScreen);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("index", index);
  };

  const handleInternalDragStart = (e, index) => {
    setIsDragging(true);
  };

  const handleInternalDragOverr = (e, index) => {
    e.preventDefault();
    const draggedItem = screens[draggedIndex];
    const newScreen = screens.filter((item, idx) => idx !== draggedIndex);
    newScreen.splice(index, 0, draggedItem);
    const dataWithoutNull = newScreen.filter((item) => item !== undefined);
    setScreens(dataWithoutNull);
    setDraggedIndex(index);
    setIsDragging(false);
    setIsLeftSideBarOpen(false);
  };

  const handleInternalDragEnd = () => {
    setIsDragging(false);
    setDraggedIndex(null);
  };

  const handleSave = () => {
    dispatch(uppdateHomeScreen(screens));
    setEditableIndex(null);
  };

  // Function to handle inputTitleChange change
  const handleTitleChange = (event, index) => {
    // Create a new array with the updated object
    const updatedScreens = screens.map((screen, idx) => {
      if (idx === index) {
        // Create a copy of the object and update the title property
        return { ...screen, title: event.target.value };
      }
      return screen;
    });

    // Update the state with the modified array
    setScreens(updatedScreens);
  };

  // Function to handle inputsubTitle change
  const handleSubTitleChange = (event, index) => {
    // Create a new array with the updated object
    const updatedScreens = screens.map((screen, idx) => {
      if (idx === index) {
        // Create a copy of the object and update the title property
        return { ...screen, subTitle: event.target.value };
      }
      return screen;
    });

    // Update the state with the modified array
    setScreens(updatedScreens);
  };

  // Function to handle btnTitle change
  const handlebtnTitleChange = (event, index) => {
    // Create a new array with the updated object
    const updatedScreens = screens.map((screen, idx) => {
      if (idx === index) {
        // Create a copy of the object and update the title property
        return { ...screen, btnTitle: event.target.value };
      }
      return screen;
    });

    // Update the state with the modified array
    setScreens(updatedScreens);
  };

  // Function to handle Delelte component
  const handlebtnDeleteComponent = (index) => {
    // Create a new array by filtering out the component at the specified index
    const updatedScreens = screens.filter((_, idx) => idx !== index);

    // Update the state with the modified array
    setScreens(updatedScreens);
    setEditableIndex(null);
  };

  return (
    <div>
      <span
        style={{
          position: "fixed",
          top: 50,
          left: 0,
          zIndex: 999,
          backgroundColor: "#000000",
          cursor: "pointer",
          color: "#E8155D",
          // opacity: isLeftSideBarOpen ? "0" : "1",
          transform: isLeftSideBarOpen
            ? "translate(-500px,0px)"
            : "translate(0px,0px)",
          transition: "all 0.5s",
        }}
        onClick={handleOpenFormElement}
        className="form-element-btn cad-fw-600 p-2 pe-4 rounded-end"
      >
        Components
      </span>

      <div
        style={{
          position: "fixed",
          zIndex: 3,
          backgroundColor: "#ccc",
          width: isLeftSideBarOpen ? "25%" : "0%",
          transform: isLeftSideBarOpen
            ? "translate(0px,6px)"
            : "translate(-500px,6px)",
          transition: "0.5s",
          height: "auto",
        }}
        className=" overflow-auto rounded-end"
      >
        <div
          style={{
            backgroundColor: "#E8155D",
          }}
          className="d-flex p-3 justify-content-between"
        >
          <span className="text-white">Components</span>
          <CloseOutlinedIcon
            onClick={() => setIsLeftSideBarOpen(false)}
            className="text-white pointer"
          />
        </div>

        {screenElement.map(({ icon, title, element }, index) => (
          <div
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            key={index}
            style={{ cursor: "all-scroll" }}
            className="d-flex  w-100 border-bottom"
          >
            <span
              style={{ backgroundColor: "#000000" }}
              className="p-3 col-2 d-flex justify-content-center"
            >
              {icon}
            </span>
            <span className="p-3 cad-fw-600 bg-white col-10">{title}</span>
          </div>
        ))}
      </div>

      <span
        style={{
          position: "fixed",
          bottom: 50,
          right: 40,
          zIndex: 999,
          backgroundColor: "#000000",
          cursor: "pointer",
          color: "#E8155D",
          width: 50,
          height: 50,
        }}
        onClick={handleSave}
        className="form-element-btn btn d-flex justify-content-center align-items-center wdi-fs-small cad-fw-600 p-2 rounded-5"
      >
        <SaveOutlinedIcon className="fs-3" />
      </span>

      <div
        style={{
          minHeight: "100vh",
          display: isDragOn ? "" : "flex",
          justifyContent: isDragOn ? "" : "center",
          alignItems: isDragOn ? "" : "center",
          backgroundColor: isDragging ? "lightblue" : "",
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {isDragOn ? (
          screens.map((component, index) => {
            const isBeingEdited = editableIndex === index;
            switch (component?.type) {
              case "header":
                return (
                  <Header1
                    index={index}
                    screens={screens}
                    elements={component}
                    // Internal editable functions
                    setEditableIndex={setEditableIndex}
                    isEdit={isBeingEdited}
                    // Internal drag functions
                    handleDragStart={handleInternalDragStart}
                    handleDragOverr={handleInternalDragOverr}
                    handleDragEnd={handleInternalDragEnd}
                    // Content changing functions
                    handleTitleChange={handleTitleChange}
                    handleSubTitleChange={handleSubTitleChange}
                    handlebtnTitleChange={handlebtnTitleChange}
                    handlebtnDeleteComponent={handlebtnDeleteComponent}
                  />
                );
              case "box&Content":
                return (
                  <BoxContent
                    index={index}
                    screens={screens}
                    elements={component}
                    // Internal editable functions
                    setEditableIndex={setEditableIndex}
                    isEdit={isBeingEdited}
                    // Internal drag functions
                    handleDragStart={handleInternalDragStart}
                    handleDragOverr={handleInternalDragOverr}
                    handleDragEnd={handleInternalDragEnd}
                    // Content changing functions
                    handleTitleChange={handleTitleChange}
                    handleSubTitleChange={handleSubTitleChange}
                    handlebtnTitleChange={handlebtnTitleChange}
                    handlebtnDeleteComponent={handlebtnDeleteComponent}
                  />
                );
              case "CTASmall":
                return (
                  <CTASmall
                    handleDragStart={handleInternalDragStart}
                    handleDragOverr={handleInternalDragOverr}
                    handleDragEnd={handleInternalDragEnd}
                    index={index}
                    elements={component}
                  />
                );
              default:
                return null;
            }
          })
        ) : (
          <span
            style={{
              border: "2px dashed #E8155D",
            }}
            className="p-5 fs-3 rounded-2 "
          >
            Please drag your components here.
          </span>
        )}
      </div>
    </div>
  );
};

export default Playground;
