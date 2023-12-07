import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  isOpen: boolean;
}

const initialState: ToggleState = {
  isOpen: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleSidebar, openSidebar, closeSidebar } = toggleSlice.actions;

export default toggleSlice.reducer;
