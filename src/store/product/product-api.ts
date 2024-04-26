import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPizza } from "@/types/pizza.types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7217/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IPizza[], string>({
      query: (accessToken: string) => {
        return {
          url: `api/Pizzas`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
      },
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
