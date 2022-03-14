import { createSlice } from "@reduxjs/toolkit";
import { createGetDataActionHandler, initialState } from "../common/common";
import { getRegionsData } from "../../api/service";

const REGION_REDUCER_NAME = "regions";

export const regionsSlice = createSlice({
  name: REGION_REDUCER_NAME,
  initialState,
  reducers: {
    getRegions: createGetDataActionHandler({
      name: REGION_REDUCER_NAME,
      getDataFn: getRegionsData,
    }),
  },
});

export const { getRegions } = regionsSlice.actions;

export default regionsSlice;
