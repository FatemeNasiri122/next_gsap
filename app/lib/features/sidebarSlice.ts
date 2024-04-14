import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SidebarState {
  open: boolean;
}

const initialState: SidebarState = {
  open: false,
};

export const sidebarSlice = createSlice({
  name: 'openSidebar',
  initialState,
  reducers: {
    openSideBar: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { openSideBar } = sidebarSlice.actions;

export const open = (state: RootState) => state.openSidebar.open;

export default sidebarSlice.reducer;