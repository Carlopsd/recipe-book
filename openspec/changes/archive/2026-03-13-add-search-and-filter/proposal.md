## Why

With 10+ recipes in the catalog, users need a way to quickly find what they're looking for. Browsing a flat grid becomes impractical as the collection grows. Text search and category filtering let users narrow results efficiently.

## What Changes

- Add a text search input that filters recipes by name and description (case-insensitive)
- Add a category dropdown populated from `GET /categories`
- Both filters work in combination (AND logic)
- Display a result counter ("X recetas encontradas")
- Show an appropriate empty state when filters produce no results
- Add a new RTK Query endpoint for fetching categories

## Capabilities

### New Capabilities
- `recipe-search-filter`: Text search and category filtering for the recipe listing, including combined filter logic, result counting, and filtered empty state.

### Modified Capabilities
- `recipe-listing`: The empty state requirement changes — the listing now distinguishes between "no recipes exist" and "no recipes match current filters."

## Impact

- **New files**: Category API endpoint in recipesApi, search/filter bar component
- **Modified files**: `RecipeList.tsx` (integrate filters, result count, filtered empty state), `recipesApi.ts` (add categories endpoint)
- **API dependency**: Adds dependency on `GET /categories` endpoint
