import { createSlice } from "@reduxjs/toolkit";
import { IDirectoryState } from "../../interfaces";

const initialState: IDirectoryState = {
  items: [
    {
      title: "HATS",
      imageUrl: `${process.env.PUBLIC_URL}/directory/hats.jpg`,
      id: 1,
      size: "",
      linkUrl: "hats",
    },
    {
      title: "SHORTS",
      imageUrl: `${process.env.PUBLIC_URL}/directory/shorts.jpg`,
      id: 2,
      size: "",
      linkUrl: "shorts",
    },
    {
      title: "SNEAKERS",
      imageUrl: `${process.env.PUBLIC_URL}/directory/sneakers.jpg`,
      id: 3,
      size: "",
      linkUrl: "sneakers",
    },
    {
      title: "WOMAN",
      imageUrl: `${process.env.PUBLIC_URL}/directory/womens.jpg`,
      id: 4,
      size: "large",
      linkUrl: "woman",
    },
    {
      title: "MAN",
      imageUrl: `${process.env.PUBLIC_URL}/directory/mens.jpg`,
      id: 5,
      size: "large",
      linkUrl: "man",
    },
  ],
};

const slice = createSlice({
  name: "directory",
  initialState,
  reducers: {},
});

export default slice.reducer;
