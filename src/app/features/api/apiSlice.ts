import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const { reducerPath, reducer, middleware, injectEndpoints } = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: () => ({}),
});
