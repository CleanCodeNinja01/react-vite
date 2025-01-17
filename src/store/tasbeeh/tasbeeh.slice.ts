import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { resetTasbeehFromServer } from '../../apis/fakeApi'

// First, create the thunk
export const resetTasbeehViaThunk = createAsyncThunk(
    'tasbeeh/resetTasbeeh',
    async () => {
      const response = await resetTasbeehFromServer()
      return response.success
    },
  )

// Define a type for the slice state
interface TasbeehState {
  count: number;
  resetStatus: "loading" | "idle" | "error";
}

// Define the initial state using that type
const initialState: TasbeehState = {
    count: 20,
    resetStatus: 'idle'
}

export const tasbeehSlice = createSlice({
  name: 'tasbeeh',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    reset: (state) => {
        state.count = 0
      },
    decrement: (state) => {
      state.count -= 1
    },
    },
    extraReducers(builder) {
        builder.addCase(resetTasbeehViaThunk.pending, (state: TasbeehState)=>{
           state.resetStatus = "loading" 
           state.count = 0
        })
        builder.addCase(resetTasbeehViaThunk.fulfilled, (state: TasbeehState)=>{
            state.resetStatus = "idle" 
            state.count = 0
         })
        builder.addCase(resetTasbeehViaThunk.rejected, (state: TasbeehState)=>{
        state.resetStatus = "error" 
        state.count = 0
        })
    }
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.count += action.payload
    // },
})

export const { increment, decrement, reset } = tasbeehSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default tasbeehSlice.reducer