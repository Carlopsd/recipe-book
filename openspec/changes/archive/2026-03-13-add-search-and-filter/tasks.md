## 1. API Layer

- [x] 1.1 Add `Category` interface and `useGetCategoriesQuery` endpoint to `src/store/api/recipesApi.ts`

## 2. Filter Bar Component

- [x] 2.1 Create `RecipeFilterBar` component in `src/features/recipes/RecipeFilterBar.tsx` with search input and category dropdown
- [x] 2.2 Populate category dropdown from `useGetCategoriesQuery` with an "all categories" default option

## 3. Filter Logic and Integration

- [x] 3.1 Add filter state (`searchText`, `selectedCategory`) to `RecipeList` and pass as props to `RecipeFilterBar`
- [x] 3.2 Implement client-side filtering with `useMemo` — case-insensitive match on name/description, AND with category
- [x] 3.3 Display result counter showing number of filtered recipes ("X recetas encontradas")
- [x] 3.4 Update empty state to distinguish between "no recipes exist" and "no recipes match filters"
