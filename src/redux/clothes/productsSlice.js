import { createSlice } from "@reduxjs/toolkit";
import { createGetDataActionHandler, initialState } from "../common/common";
import { getProductsData } from "../../api/service";

const PRODUCT_REDUCER_NAME = "products";

export const productsSlice = createSlice({
  name: PRODUCT_REDUCER_NAME,
  initialState,
  reducers: {
    getProducts: createGetDataActionHandler({
      name: PRODUCT_REDUCER_NAME,
      getDataFn: getProductsData,
    }),
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice;
