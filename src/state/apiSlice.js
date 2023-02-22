import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
  }),
  endpoints: (builder) => ({
    getRepos: builder.query({
      query: (username) => `get_repos?username=${username}`,
    }),
  }),
});
export const { useGetReposQuery } = apiSlice;
