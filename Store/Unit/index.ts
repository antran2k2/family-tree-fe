import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  unit: null,
} as { unit?: any }

const slice = createSlice({
  name: 'unit',
  initialState: initialState,
  reducers: {
    setUnit: (state, { payload: { unit } }: any) => {
      if (unit) {
        state.unit = unit
      }
    },
  },
})

export const { setUnit } = slice.actions

export default slice.reducer
