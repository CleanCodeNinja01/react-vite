import { configureStore } from '@reduxjs/toolkit'
import { tasbeehSlice } from './tasbeeh/tasbeeh.slice'
// ...

export const store = configureStore({
  reducer: {
    tasbeeh: tasbeehSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch