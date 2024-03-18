import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchSCategories,
  addSCategorie,
  deleteSCategorie,
  editSCategorie,
  fetchSCategorieById,
} from "../services/ScategorieService";
export const getScategories = createAsyncThunk(
  "scategorie/getScategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetchSCategories();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createScategorie = createAsyncThunk(
  "scategorie/createScategorie",
  async (scategorie, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await addSCategorie(scategorie);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteScategorie = createAsyncThunk(
  "scategorie/deleteScategorie",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await deleteSCategorie(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateScategorie = createAsyncThunk(
  "scategorie/updateScategorie",
  async (scategorie, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await editSCategorie(scategorie);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const findScategorieByID = createAsyncThunk(
  "scategorie/findScategorieByID",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetchSCategorieById(id);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const scategorieSlice = createSlice({
  name: "scategorie",
  initialState: {
    scategories: [],

    scategorie: {},
    isLoading: false,
    success: null,
    error: null,
  },

  extraReducers: (builder) => {
    //get scategories
    builder
      .addCase(getScategories.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getScategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.scategories = action.payload;
      })
      .addCase(getScategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log("impossible de se connecter au serveur");
      })
      //insertion scategorie
      .addCase(createScategorie.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(createScategorie.fulfilled, (state, action) => {
        state.scategories.push(action.payload);
        state.isLoading = false;
        state.error = null;
        state.success = action.payload;
      })
      .addCase(createScategorie.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = null;
      })
      //Modification scategorie
      .addCase(updateScategorie.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;

        10;
      })
      .addCase(updateScategorie.fulfilled, (state, action) => {
        state.scategories = state.scategories.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
        state.isLoading = false;
        state.error = null;
        state.success = action.payload;
      })
      //Delete scategorie
      .addCase(deleteScategorie.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteScategorie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.scategories = state.scategories.filter(
          (item) => item._id !== action.payload
        );
      })
      .addCase(deleteScategorie.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //Fectch scategorie
      .addCase(findScategorieByID.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(findScategorieByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.scategorie = action.payload;
      });
  },
});

export default scategorieSlice.reducer;
