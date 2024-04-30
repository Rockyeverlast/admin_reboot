/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Delete from "../Delete";
import Edit from "../Edit";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import award from "../../assets/awards.png";
import award2 from "../../assets/awards2.png";
import award3 from "../../assets/awards3.png";
import { Box } from "@mui/material";

const Awards = ({
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
  const { title, subTitle } = elements;
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
      <div className="container text-center">
        <h1 className="wdi-fw-500 fs-1 p-3 text-white">Awards & Recognition</h1>

        {isEdit ? (
          <input
            style={{
              background: "transparent", // "transparent" is corrected
              outline: "none", // Remove the outline when focused
            }}
            value={screens[index].subTitle}
            onChange={(e) => handleSubTitleChange(e, index)}
            className="mt-2 p text-white border-0 wdi-fw-400 fs-5"
          />
        ) : (
          <p className="mt-2 text-white border-0 wdi-fw-400 fs-5">{subTitle}</p>
        )}

        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          style={{ marginTop: "3rem" }}
        >
          <SwiperSlide>
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <div>
                <img src={award} alt="" srcSet="" />
              </div>
              <div>
                <img src={award2} alt="" srcSet="" />
              </div>
              <div>
                <img src={award3} alt="" srcSet="" />
              </div>
              <div>
                <img src={award} alt="" srcSet="" />
              </div>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <div>
                <img src={award3} alt="" srcSet="" />
              </div>
              <div>
                <img src={award2} alt="" srcSet="" />
              </div>
              <div>
                <img src={award3} alt="" srcSet="" />
              </div>
              <div>
                <img src={award2} alt="" srcSet="" />
              </div>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <div>
                <img src={award2} alt="" srcSet="" />
              </div>
              <div>
                <img src={award} alt="" srcSet="" />
              </div>
              <div>
                <img src={award3} alt="" srcSet="" />
              </div>
              <div>
                <img src={award} alt="" srcSet="" />
              </div>
            </Box>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Awards;
