import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import {userApi} from '../Services/register'
export const store = configureStore({
  reducer: {
    login: loginReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch