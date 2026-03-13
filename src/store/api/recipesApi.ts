import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  category: string;
  difficulty: string;
  prepTime: number;
  imageUrl: string;
}

export interface Category {
  id: number;
  name: string;
}

export const recipesApi = createApi({
  reducerPath: "recipesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getRecipes: builder.query<Recipe[], void>({
      query: () => "/recipes",
    }),
    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
    }),
  }),
});

export const { useGetRecipesQuery, useGetCategoriesQuery } = recipesApi;
