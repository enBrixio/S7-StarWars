import { configureStore } from '@reduxjs/toolkit'
import shipReducer from './slices/Ships'
import { useSelector, useDispatch } from 'react-redux'

const useJuanSelector = useSelector
const useJuanDispatch = useDispatch

const store = configureStore({
  reducer: {
    shipsSlices: shipReducer,
    shipsSlicesImage: shipReducer,
     },
})

export {
useJuanDispatch,
useJuanSelector,
}

export default store