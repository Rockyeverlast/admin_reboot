import React from "react";
import GrainOutlinedIcon from "@mui/icons-material/GrainOutlined";

const Edit = ({ handlebtnEditComponent, isEdit }) => {
  return (
    <span
      style={{
        position: "absolute",
        top: 45,
        right: 30,
        zIndex: 999,
        backgroundColor: "#000000",
        cursor: "pointer",
        color: "#E8155D",
        transform: isEdit ? "translate(150px,0px)" : "translate(0px,0px)",
        transition: "0.5s",

        // width: 50,
        // height: 50,
        // display: isEdit ? "flex" : "none",
      }}
      onClick={handlebtnEditComponent}
      className="form-element-btn d-flex  justify-content-center align-items-center wdi-fs-small cad-fw-600 p-2 ps-3 pe-3 rounded-5"
    >
      Edit <GrainOutlinedIcon className="ms-2 wdi-fs-medium" />
    </span>
  );
};

export default Edit;
