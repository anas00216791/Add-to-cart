"use client"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Cart } from '@/app/utils/Types'
import Product from '@/app/utils/Mock'

// Define the initial state using that type
const initialState:Cart[] = [];

export const CartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
})

export const {  } = CartSlice.actions
export default CartSlice.reducer