import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './features/sidebarSlice';

export const sideStore = () => {
  return configureStore({
    reducer: {
      openSidebar: sidebarSlice,
    },
  });
};

export type AppStore = ReturnType<typeof sideStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];