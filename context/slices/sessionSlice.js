import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  email: "",
  isLogged: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    loginFB: (state = initialState, action) => {
      return {
        ...state, //
        token: action.payload.token,
        email: action.payload.email,
        isLogged: true,
      };
    },
    logoutFB: (state = initialState, action) => {
      return {
        ...state, //
        token: "",
        email: "",
        isLogged: false,
      };
    },
  },
});

export const { loginFB, logoutFB } = sessionSlice.actions;
export default sessionSlice.reducer;
