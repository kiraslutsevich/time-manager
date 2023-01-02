import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/mainTypes";
import thunks from './mainSlice.thunks';

let isLoaded = false;
const getInitialStore = () => ({
  user: null as IUser | null,
  isAuthChecked: isLoaded,
});

const mainSlice = createSlice({
  name: 'main',
  initialState: getInitialStore,
  reducers: {
    setUser: (store, { payload }: PayloadAction<IUser | null>) => {
      store.user = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.authorize.fulfilled, (store, { payload }) => {
      store.isAuthChecked = true;
      isLoaded = true;
      store.user = payload;
    });
    builder.addCase(thunks.authorize.rejected, (store) => {
      store.isAuthChecked = true;
      isLoaded = true;
    });
  },
});

export const mainSliceActions = mainSlice.actions;
export { default as mainSliceThunks } from './mainSlice.thunks';

export default mainSlice.reducer;