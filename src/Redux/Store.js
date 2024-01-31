import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Reducer'

export const store = configureStore({
  reducer: {
    login: counterReducer,
  },
})