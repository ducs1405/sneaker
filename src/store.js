import { configureStore } from '@reduxjs/toolkit'
import filter from "./reducers/filter";

export default configureStore({
  reducer: filter,
})