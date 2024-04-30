import Delete from "../Delete";
import Edit from "../Edit";

const BoxContent = ({
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
  return (
    <section
      draggable
      // onDragStart={(e) => handleDragStart(e, index)}
      // onDragOver={(e) => handleDragOverr(e, index)}
      // onDragEnd={handleDragEnd}
      style={{
        height: "100vh",
        // width: "100vw",
        cursor: "grab",
        position: "relative",
        overflow: "hidden",
      }}
      onDoubleClick={() => setEditableIndex(index)}
      className=" p-5"
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

      <div className="text-center">
        <h1 className="wdi-fw-500 fs-1 p-3">
          AI, Machine Learning and Data Science
        </h1>

        <p className="fs-5 ps-3 pe-3">
          Using next-gen technology to deliver futuristic mobile apps.
        </p>
        <p className="fs-6 ps-3 pe-3">
          With the help of artificial intelligence, we enhance the mobile app
          user experience. We define and implement machine learning strategies
          to automate and optimize existing data processes, allowing you to get
          better insights from the available data.
        </p>
      </div>

      <div className="d-flex flex-wrap justify-content-center p-4">
        <div className="d-flex justify-content-start align-items-center gap-3 col-4 mb-5">
          <img
            style={{
              height: "80px",
              width: "80px",
              boxShadow: "0 5px 8px #00000029",
            }}
            src="https://www.wdipl.com/public/img/ai_machine_learning/innovation.webp"
            alt=""
            className="bg-white p-3 rounded-2"
          />
          <span
            style={{
              width: "80px",
            }}
            className="wdi-fs-medium"
          >
            Data & Al strategy
          </span>
        </div>
        <div className="d-flex justify-content-start align-items-center gap-3 col-4 mb-5">
          <img
            style={{
              height: "80px",
              width: "80px",
              boxShadow: "0 5px 8px #00000029",
            }}
            src="https://www.wdipl.com/public/img/ai_machine_learning/innovation.webp"
            alt=""
            className="bg-white p-3 rounded-2"
          />
          <span
            style={{
              width: "80px",
            }}
            className="wdi-fs-medium"
          >
            Data & Al strategy
          </span>
        </div>
        <div className="d-flex justify-content-start align-items-center gap-3 col-4 mb-5">
          <img
            style={{
              height: "80px",
              width: "80px",
              boxShadow: "0 5px 8px #00000029",
            }}
            src="https://www.wdipl.com/public/img/ai_machine_learning/innovation.webp"
            alt=""
            className="bg-white p-3 rounded-2"
          />
          <span
            style={{
              width: "80px",
            }}
            className="wdi-fs-medium"
          >
            Data & Al strategy
          </span>
        </div>
        <div className="d-flex justify-content-start align-items-center gap-3 col-4 mb-5">
          <img
            style={{
              height: "80px",
              width: "80px",
              boxShadow: "0 5px 8px #00000029",
            }}
            src="https://www.wdipl.com/public/img/ai_machine_learning/innovation.webp"
            alt=""
            className="bg-white p-3 rounded-2"
          />
          <span
            style={{
              width: "80px",
            }}
            className="wdi-fs-medium"
          >
            Data & Al strategy
          </span>
        </div>
        <div className="d-flex justify-content-start align-items-center gap-3 col-4 mb-5">
          <img
            style={{
              height: "80px",
              width: "80px",
              boxShadow: "0 5px 8px #00000029",
            }}
            src="https://www.wdipl.com/public/img/ai_machine_learning/innovation.webp"
            alt=""
            className="bg-white p-3 rounded-2"
          />
          <span
            style={{
              width: "80px",
            }}
            className="wdi-fs-medium"
          >
            Data & Al strategy
          </span>
        </div>
        <div className="d-flex justify-content-start align-items-center gap-3 col-4 mb-5">
          <img
            style={{
              height: "80px",
              width: "80px",
              boxShadow: "0 5px 8px #00000029",
            }}
            src="https://www.wdipl.com/public/img/ai_machine_learning/innovation.webp"
            alt=""
            className="bg-white p-3 rounded-2"
          />
          <span
            style={{
              width: "80px",
            }}
            className="wdi-fs-medium"
          >
            Data & Al strategy
          </span>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button
          className=" mb-5 fw-600 ps-5 p-2 text-white border-0 pe-5 rounded-2"
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

export default BoxContent;
