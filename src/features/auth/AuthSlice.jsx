import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUserToken : (state, action) => {
      state.userToken = action.payload;
    },
    addUserInfo : (state, action) => {
      const { firstName, lastName, email } = action.payload
      state.userInfo.firstName = firstName;
      state.userInfo.lastName = lastName;
      state.userInfo.email = email;
    },
    editUserInfo : (state, action) => {
      const { firstName, lastName } = action.payload
      state.userInfo.firstName = firstName;
      state.userInfo.lastName = lastName;
    },
    resetUser : (state, action) => {
      state.userInfo = action.payload
      state.userInfo={}
      state.userToken= null
    }
  },
  extraReducers: {},
})

export default authSlice.reducer