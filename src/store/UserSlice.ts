import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { userId: string | null } = {
  userId: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, actions: PayloadAction<string>) => {
      state.userId = actions.payload;
    },
    deleteUser: (state) => {
      state.userId = null;
    },
  },
});

export const { addUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
