import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 

interface UserProps{
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserProps[], void>({
      query: () => `/users`,
    }),
  }),
});

export const {useGetUsersQuery} = userApi;