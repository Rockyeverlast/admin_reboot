import React from "react";
import pattern from "../../assets/pattern.png";
import Delete from "../Delete";
import Edit from "../Edit";

const CTASmall = ({
  elements,
  handleDragStart,
  handleDragOverr,
  handleDragEnd,
  index,
  isEdit,
  setEditableIndex,
  handlebtnDeleteComponent,
}) => {
  return (
    <section
      draggable
      // onDragStart={(e) => handleDragStart(e, index)}
      // onDragOver={(e) => handleDragOverr(e, index)}
      // onDragEnd={handleDragEnd}
      style={{
        height: "45vh",
        // width: "100vw",
        position: "relative",
        cursor: "grab",
      }}
      className="bg-warning overflow-hidden bg-black"
    >
      <Delete
        isEdit={isEdit}
        handlebtnDeleteComponent={handlebtnDeleteComponent}
        index={index}
      />

      <Edit
        isEdit={isEdit}
        handlebtnEditComponent={() => setEditableIndex(index)}
        index={index}
      />

      <img
        style={{ position: "absolute", top: 0, right: 0 }}
        src={pattern}
        alt=""
      />

      <div className="col-6 ps-5 p-4">
        <h1 className="text-white mt-4">Build Your Future</h1>
        <p className="text-white">
          Partner with us for tailored software solutions. Your success is our
          priority
        </p>
        <button
          className="mt-5 fw-600 ps-5 p-2 text-white border-0 pe-5 "
          style={{
            backgroundColor: "#E5195E",
          }}
        >
          Stay A Level Up With AI & ML
        </button>
      </div>
    </section>
  );
};

export default CTASmall;
