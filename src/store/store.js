import { configureStore } from '@reduxjs/toolkit'
import alpineReducer from '../features/alpineSlice'

export const store = configureStore({
  reducer: {
    alpine: alpineReducer,
  },
})