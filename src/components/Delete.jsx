import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Delete = ({ handlebtnDeleteComponent, index, isEdit }) => {
  return (
    <span
      style={{
        position: "absolute",
        top: 20,
        right: 30,
        zIndex: 999,
        backgroundColor: "#000000",
        cursor: "pointer",
        color: "#E8155D",
        transform: isEdit
          ? "translate(0px,0px)"
          : "translate(150px,0px)",
        transition: "0.5s",
        
        // width: 50,
        // height: 50,
        // display: isEdit ? "flex" : "none",
      }}
      onClick={() => handlebtnDeleteComponent(index)}
      className="form-element-btn d-flex  justify-content-center align-items-center wdi-fs-small cad-fw-600 p-2 ps-3 pe-3 rounded-5"
    >
      Delete <DeleteOutlineOutlinedIcon className="ms-2 wdi-fs-medium" />
    </span>
  );
};

export default Delete;
