import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface LoginState {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  error?: string | null;
}

const initialState: LoginState = {
  id: null,
  firstName: null,
  lastName: null,
  email:null,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess:(state, action: PayloadAction<{ id: number, firstName: string,lastName:string, email:string }>)=> {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email=action.payload.email;
      state.error = null;
    },
    loginFailure:(state, action: PayloadAction<string>) =>{
    
      state.id = null;
      state.firstName = null;
      state.lastName= null;
      state.email=null;
      state.error = action.payload;
    },
    logout:(state)=> {
        state.id = null;
        state.firstName = null;
        state.lastName= null;
        state.email=null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = loginSlice.actions;

export default loginSlice.reducer;
