import { injectEndpoints } from "../api/apiSlice";

export const bookingApi = injectEndpoints({
  endpoints: (builder) => ({
    todos3: builder.query<any, void>({
      query: () => ({
        url: `todos?_start=20&_limit=10`,
      }),
    }),
  }),
});

export const { useTodos3Query } = bookingApi;
