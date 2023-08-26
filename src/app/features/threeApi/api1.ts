import { injectEndpoints } from "../api/apiSlice";

export const bookingApi = injectEndpoints({
  endpoints: (builder) => ({
    todos1: builder.query<any, void>({
      query: () => ({
        url: `todos?_limit=10`,
      }),
    }),
  }),
});

export const { useTodos1Query } = bookingApi;
