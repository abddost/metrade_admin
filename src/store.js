import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import allProductsSlice from "./features/allProductsSlice";
import productSlice from "./features/productSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    allProducts: allProductsSlice,
  },
});
