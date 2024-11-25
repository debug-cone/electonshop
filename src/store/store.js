import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './ProductsSlice'

const store = configureStore({
    reducer: {
        productStore: productsSlice
    }
})

export default store