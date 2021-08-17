import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CollectionItems, ICollectionState } from "../../interfaces";
import {
  convertCollectionToMap,
  firestore,
} from "../../services/firebase.utils";
import { isObjectEmpty } from "../../utilities/helpers";

interface MyKnownError {
  errorMessage: string;
}

export const fetchCollections = createAsyncThunk<
  CollectionItems,
  void,
  {
    rejectValue: MyKnownError;
  }
>("fetchCollections", async (_, { rejectWithValue }) => {
  const collectionRef = firestore.collection("collections");

  const response = await collectionRef.get().then((snapshot) => {
    const responseObcject = convertCollectionToMap(snapshot);
    if (isObjectEmpty(responseObcject)) return false;
    return convertCollectionToMap(snapshot);
  });
  if (!response)
    return rejectWithValue({
      errorMessage: "Error fetching collections! Is empty!",
    });
  return response as CollectionItems;
});

const initialState: ICollectionState = {
  collections: {},
  status: "idle",
  error: {},
};

const slice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    updateCollections: (state, action: PayloadAction<CollectionItems>) => {
      state.collections = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCollections.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.collections = action.payload;
    });
    builder.addCase(fetchCollections.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchCollections.rejected, (state, action) => {
      if (action.payload) {
        state.error.message = action.payload.errorMessage;
      } else {
        state.error.message = "Something is wrong with fetching collections";
      }
    });
  },
});

export const { updateCollections } = slice.actions;

export default slice.reducer;
