import { configureStore } from '@reduxjs/toolkit'
import { playersSlices } from './players'

export const store = configureStore({
  reducer: {
    players: playersSlices.reducer,
  },
})