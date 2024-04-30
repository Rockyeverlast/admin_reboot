/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import Delete from "../Delete";
import Edit from "../Edit";
import { useForm } from "react-hook-form";

const Form = ({
  elements,
  handleDragStart,
  handleDragOverr,
  handleDragEnd,
  index,
  isEdit,
  setEditableIndex,
  screens,
  handleTitleChange,
  handleSubTitleChange,
  handlebtnTitleChange,
  handlebtnDeleteComponent,
}) => {
  const { title, subTitle, paragraph, Contact } = elements;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section
      draggable
      style={{
        height: "100vh",
        // width: "100vw",
        display: "grid",
        placeContent: "center",
        cursor: "grab",
      }}
      className="bg-warning overflow-hidden bg-white"
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
      <div className="container text-center">
        {isEdit ? (
          <input
            style={{
              background: "transparent", // "transparent" is corrected
              outline: "none", // Remove the outline when focused
            }}
            value={screens[index].title}
            onChange={(e) => handleSubTitleChange(e, index)}
            className="mt-2 p text-black border-0 wdi-fw-400 fs-5"
          />
        ) : (
          <p className="fs-4 wdi-fw-600 p-3 text-black">{title}</p>
        )}
      </div>

      <div className="row">
        <div className="col-md-4 text-start">
          {isEdit ? (
            <input
              style={{
                background: "transparent", // "transparent" is corrected
                outline: "none", // Remove the outline when focused
              }}
              value={screens[index].subTitle}
              onChange={(e) => handleSubTitleChange(e, index)}
              className="mt-2 p text-black border-0 wdi-fw-400 fs-5"
            />
          ) : (
            <h4 className="wdi-fw-500 fs-1 text-black">{subTitle}</h4>
          )}
        </div>

        {/* Form */}
        <div
          className="col-md-8"
          style={{
            border: "1px solid #D7D7D7",
            padding: "3rem",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "3rem",
                marginBottom: "2rem",
              }}
            >
              {/* register your input into the hook by invoking the "register" function */}
              <Box width={"100%"} minH={"120px"}>
                <label style={{ color: "#404040", fontFamily: "Asap" }}>
                  First Name*
                </label>
                <input
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    background: "transparent",
                    color: "#404040",
                    border: "none",
                    borderBottom: "1px solid",
                    padding: "10px",
                    marginTop: "10px",
                    borderRadius: "2px",
                  }}
                  //   placeholder="First Name"
                  {...register("firstName", {
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message:
                        "Please enter a valid First Name with only letters",
                    },
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors.firstName && (
                  <p style={{ fontSize: "13px", color: "red" }}>
                    {errors.firstName.message}
                  </p>
                )}
              </Box>

              <Box width={"100%"} minH={"120px"}>
                <label style={{ color: "#404040", fontFamily: "Asap" }}>
                  E-mail Address*
                </label>
                <input
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    background: "transparent",
                    color: "#404040",
                    border: "none",
                    borderBottom: "1px solid",
                    padding: "10px",
                    marginTop: "10px",
                    borderRadius: "2px",
                  }}
                  //   placeholder="Email"
                  type="email"
                  {...register("Email", {
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                    required: true,
                  })}
                />
                {errors.Email && (
                  <p style={{ fontSize: "13px", color: "red" }}>
                    {errors.Email.message}
                  </p>
                )}
              </Box>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "3rem",
                marginBottom: "2rem",
              }}
            >
              <Box width={"100%"} minH={"120px"}>
                <label style={{ color: "#404040", fontFamily: "Asap" }}>
                  Phone Number*
                </label>
                <input
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    background: "transparent",
                    color: "#404040",
                    border: "none",
                    borderBottom: "1px solid",
                    padding: "10px",
                    marginTop: "10px",
                    borderRadius: "2px",
                  }}
                  //   placeholder="Phone"
                  type="tel"
                  {...register("Phone", {
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Phone number should contain only digits",
                    },
                    minLength: {
                      value: 10,
                      message: "Phone number should be at least 10 digits",
                    },
                    maxLength: {
                      value: 10,
                      message: "Phone number should not exceed 10 digits",
                    },
                    required: true,
                  })}
                />
                {errors.Phone && (
                  <p style={{ fontSize: "13px", color: "red" }}>
                    {errors.Phone.message}
                  </p>
                )}
              </Box>

              <Box width={"100%"} minH={"120px"}>
                <label
                  htmlFor="file"
                  style={{ color: "#404040", fontFamily: "Asap" }}
                >
                  Select your state
                </label>
                <select
                  id="selectField"
                  {...register("selectField", { required: true })}
                  style={{
                    width: "100%",
                    marginBottom: "5px",
                    background: "transparent",
                    color: "#404040",
                    border: "none",
                    borderBottom: "1px solid",
                    padding: "10px",
                    marginTop: "10px",
                    borderRadius: "2px",
                  }}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>

                {errors.Phone && (
                  <p style={{ fontSize: "13px", color: "red" }}>
                    {errors.selectField.message}
                  </p>
                )}
              </Box>
            </div>

            <div>
              <label htmlFor="file">Select a file:</label>
              <input
                type="file"
                id="file"
                name="file"
                style={{
                  width: "100%",
                  marginBottom: "5px",
                  background: "transparent",
                  color: "#404040",
                  border: "1px solid #C8C8C8",
                  padding: "10px",
                  marginTop: "10px",
                  borderRadius: "2px",
                }}
              ></input>
            </div>

            <input type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
