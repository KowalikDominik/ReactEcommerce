import { createSlice } from "@reduxjs/toolkit";
import { IDirectoryState } from "../../interfaces";

const initialState: IDirectoryState = {
  items: [
    {
      title: "HATS",
      imageUrl: `${process.env.PUBLIC_URL}/directory/hats.jpg`,
      id: 1,
      size: "",
      linkUrl: "shop/hats",
    },
    {
      title: "SNEAKERS",
      imageUrl: `${process.env.PUBLIC_URL}/directory/sneakers.jpg`,
      id: 3,
      size: "",
      linkUrl: "shop/sneakers",
    },
    {
      title: "JACKETS",
      imageUrl: `${process.env.PUBLIC_URL}/directory/jackets.jpg`,
      id: 2,
      size: "",
      linkUrl: "shop/jackets",
    },
    {
      title: "WOMAN",
      imageUrl: `${process.env.PUBLIC_URL}/directory/womens.jpg`,
      id: 4,
      size: "large",
      linkUrl: "shop/womens",
    },
    {
      title: "MAN",
      imageUrl: `${process.env.PUBLIC_URL}/directory/mens.jpg`,
      id: 5,
      size: "large",
      linkUrl: "shop/mens",
    },
  ],
};

const slice = createSlice({
  name: "directory",
  initialState,
  reducers: {},
});

export default slice.reducer;
