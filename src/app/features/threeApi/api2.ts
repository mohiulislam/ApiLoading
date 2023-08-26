import { injectEndpoints } from "../api/apiSlice";

export const bookingApi = injectEndpoints({
  endpoints: (builder) => ({
    todos2: builder.query<any, void>({
      query: () => ({
        url: `todos?_start=10&_limit=10`,
      }),
    }),
  }),
});

export const { useTodos2Query } = bookingApi;