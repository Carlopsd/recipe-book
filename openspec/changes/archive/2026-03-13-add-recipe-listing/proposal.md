## Why

The Recipe Book app currently shows only a placeholder heading with no content. Users need a main page that displays all available recipes so they can browse and discover what to cook. This is the foundational feature that makes the app useful.

## What Changes

- Add an RTK Query API slice to fetch recipes from `GET /recipes`
- Create a recipe listing page that displays all recipes as cards
- Each card shows: image, name, category, difficulty, and preparation time
- Integrate the API slice into the Redux store
- Replace the placeholder App content with the recipe listing

## Capabilities

### New Capabilities
- `recipe-listing`: Browsing all recipes displayed as cards with image, name, category, difficulty, and preparation time. Includes data fetching via RTK Query.

### Modified Capabilities
<!-- No existing capabilities to modify -->

## Impact

- **New files**: RTK Query API slice, RecipeCard component, RecipeList page component
- **Modified files**: `store/store.ts` (add API middleware/reducer), `App.tsx` (render listing)
- **API dependency**: Requires mock server running at `http://localhost:3001` with `GET /recipes` endpoint
