import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:''
}

export const counterSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    
    adddata: (state, action) => {
      state.data = action.payload
      
    },
  },
})


export const {adddata } = counterSlice.actions

export default counterSlice.reducer