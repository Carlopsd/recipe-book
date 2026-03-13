## 1. RTK Query API Setup

- [x] 1.1 Define `Recipe` TypeScript interface in `src/store/api/recipesApi.ts`
- [x] 1.2 Create RTK Query API slice with `useGetRecipesQuery` endpoint for `GET /recipes`
- [x] 1.3 Register the API slice reducer and middleware in `src/store/store.ts`

## 2. Recipe Card Component

- [x] 2.1 Create `RecipeCard` component in `src/features/recipes/RecipeCard.tsx` displaying image, name, category, difficulty, and preparation time
- [x] 2.2 Add placeholder image fallback when recipe image is missing or empty

## 3. Recipe List Page

- [x] 3.1 Create `RecipeList` component in `src/features/recipes/RecipeList.tsx` using `useGetRecipesQuery`
- [x] 3.2 Implement loading state with a loading indicator
- [x] 3.3 Implement error state with an error message
- [x] 3.4 Implement empty state when no recipes are returned
- [x] 3.5 Render recipe cards in a responsive grid layout

## 4. App Integration

- [x] 4.1 Update `App.tsx` to render the `RecipeList` component as the main page content
