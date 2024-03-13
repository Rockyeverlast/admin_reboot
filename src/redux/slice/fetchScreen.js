import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchTaskData = createAsyncThunk("fetchTaskData", async (params) => {
//   try {
//     const res = await getTask(params);
//     console.log(res.data);
//     return res.data;
//   } catch (err) {
//     throw new Error(`Error fetching data: ${err.message}`);
//   }
// });

const screen = createSlice({
  name: "screens",
  initialState: {
    isLoading: true,
    isError: false,
    error: null,
    homeScreen: [
      {
        type: "header",
        title: 'Where Ideas Transform into Extraordinary Apps."',
        subTitle:
          '"Empowering Businesses through Cutting-Edge Software Solutions."',
        btnTitle: "Transform your vission into reality",
        btnLink: "/home",
      },
      {
        type: "CTASmall",
        title: 'Build Your Future"',
        subTitle:
          "Partner with us for tailored software solutions. Your success is our priority",
        BtnTitle: "Stay level up with AI & ML",
        BtnLink: "",
      },
      {
        type: "box&Content",
        title: "AI, Machine Learning and Data Science",
        subTitle:
          "Using next-gen technology to deliver futuristic mobile apps.",
        paragraph:
          "Using next-gen technology to deliver futuristic mobile apps.",
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
    ],
    blogCards: null,
  },
  reducers: {
    uppdateHomeScreen: (state, action) => {
      console.log(action.payload);
      state.homeScreen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder;
    // .addCase(fetchTaskData.pending, (state) => {
    //   state.isLoading = true;
    //   state.isError = false;
    //   state.error = null;
    // })
    // .addCase(fetchTaskData.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.tasks = action.payload.data.rows; // Update the faq property with the fetched data
    //   state.totalPages = action.payload.data.totalPages;
    // })
    // .addCase(fetchTaskData.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.error = action.error.message; // Store the error message
    // })
  },
});

export const { uppdateHomeScreen } = screen.actions;
export default screen.reducer;
