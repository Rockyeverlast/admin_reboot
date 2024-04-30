import Badges from "../../assets/bannerBadges.png";
import Banner2 from "../../assets/banner2.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uppdateHomeScreen } from "../../redux/slice/fetchScreen";
import Delete from "../Delete";
import Edit from "../Edit";

const Header1 = ({
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
  const { title, subTitle, btnTitle, btnLink } = elements;

  const dispatch = useDispatch();

  return (
    <section
      draggable
      // onDragStart={(e) => handleDragStart(e, index)}
      // onDragOver={(e) => handleDragOverr(e, index)}
      // onDragEnd={handleDragEnd}
      // onDoubleClick={() => setEditableIndex(index)}
      style={{
        height: "100vh",
        width: "100vw",
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.95) 20%, rgba(0, 0, 0, 0.5) 80%)`,
        backgroundSize: "cover, cover",
        backgroundPosition: "center center, center center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        cursor: "grab",
        overflow: "hidden",
      }}
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
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          zIndex: -1,
        }}
        src={Banner2}
        alt=""
      />

      <div className="col-6 h-100 d-flex align-items-start flex-column justify-content-start p-5 gap-2">
        {isEdit ? (
          <input
            style={{
              background: "transparent", // "transparent" is corrected
              outline: "none", // Remove the outline when focused
            }}
            value={screens[index].title}
            onChange={(e) => handleTitleChange(e, index)}
            className="mt-5 h1 text-white border-0"
          />
        ) : (
          <h1 className="mt-5 text-white">{title}</h1>
        )}

        {isEdit ? (
          <input
            style={{
              background: "transparent", // "transparent" is corrected
              outline: "none", // Remove the outline when focused
            }}
            value={screens[index].subTitle}
            onChange={(e) => handleSubTitleChange(e, index)}
            className="mt-2 p text-white border-0"
          />
        ) : (
          <p className="mt-2 text-white">{subTitle}</p>
        )}

        <Link to={btnLink}>
          <button
            className="mt-4 mb-5 fw-600 ps-4 p-2 text-white border-0 pe-4"
            style={{
              backgroundColor: "#E5195E",
            }}
            disabled={isEdit}
          >
            {isEdit ? (
              <input
                style={{
                  background: "transparent ", // "transparent" is corrected
                  outline: "none", // Remove the outline when focused
                }}
                value={screens[index].btnTitle}
                onChange={(e) => handlebtnTitleChange(e, index)}
                className="span border-0 text-white"
              />
            ) : (
              btnTitle
            )}
          </button>
        </Link>

        <div className="badges mt-5">
          <img src={Badges} alt="" srcSet="" />
        </div>
      </div>
    </section>
  );
};

export default Header1;
