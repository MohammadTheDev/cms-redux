import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticlesFromServer = createAsyncThunk(
  "articles/getArticlesFromServer",
  async (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
);

export const removeArticle = createAsyncThunk(
  "articles/removeArticles",
  async (id) => {
    return fetch(`https://redux-cms.iran.liara.run/api/articles/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
  }
);

const slice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      getArticlesFromServer.fulfilled,
      (state, action) => action.payload
    );

    builder.addCase(removeArticle.fulfilled, (state, action) => {
      const newArticle = state.filter(
        (article) => article._id !== action.payload.id
      );

      return newArticle;
    });
  },
});

export default slice.reducer;
