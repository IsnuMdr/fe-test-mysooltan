import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
  }),
  endpoints: (builder) => ({
    getRepos: builder.query({
      query: (username) => `api/get_repos?username=${username}`,
    }),
  }),
});
export const { useGetReposQuery } = apiSlice;
