import { fetchData } from "../../api/service";

export const initialState = {
  isLoading: true,
  data: null,
  isError: false,
};

const EXPRATION_TIME = 1000 * 60;

export const createGetDataActionHandler =
  ({ name, getDataFn }) =>
  async (state) => {
    try {
      state = {
        isLoading: false,
        data: await getDataFn(),
        isError: false,
      };
      localStorage.setItem(
        name,
        JSON.stringify({
          state,
          expiredAt: Date.now() + EXPRATION_TIME,
        }),
      );
    } catch {
      state = {
        isLoading: false,
        data: null,
        isError: true,
      };
      localStorage.removeItem(name);
    }
  };
