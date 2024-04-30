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
      {
        type: "Awards",
        title: 'Awards & Recognition',
        subTitle:
          `Our talented team of developers, designers, 
          and engineers has consistently demonstrated a dedication to pushing the boundaries of what is possible in the digital landscape. 
          From prestigious industry awards to client testimonials, this section reflects the tangible impact of our work `,
        BtnTitle: "",
        BtnLink: "",
      },
      {
        type: "Forms",
        title: `Let's Collaborate to Shape your Vision into Reality`,
        subTitle:
          `Open for hiring`,
        paragraph:
          `"Join our dynamic team of innovators, where your passion for code meets limitless possibilities. 
          Shape the future of technology with us!"`,
        BtnTitle: "",
        BtnLink: "",
        Contact: [
          {
            Location: `614,Palms Spring centre, Link Road, Malad (West), Mumbai - 400064`,
          },
          {
            Email: `ideas@wdipl.com`,
          },
          {
            Contact: `(+91) 98200 10775`,
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
