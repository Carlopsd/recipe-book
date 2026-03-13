## Context

The Recipe Book app has a working recipe listing page that fetches all recipes via RTK Query and displays them in a card grid. Categories are available from a separate `GET /categories` endpoint but not yet consumed by the frontend. Filtering needs to be added on top of the existing listing.

## Goals / Non-Goals

**Goals:**
- Allow users to search recipes by name/description with instant client-side filtering
- Allow users to filter by category using a dropdown populated from the API
- Combine both filters with AND logic
- Show result count and a contextual empty state for filtered views

**Non-Goals:**
- Server-side search/filtering (client-side is sufficient for this dataset size)
- Debounced search input (dataset is small, instant filtering is fine)
- URL-based filter state or deep linking
- Advanced filters (difficulty, prep time range)

## Decisions

### 1. Client-side filtering with `useMemo`

Filter the already-fetched recipes array in the component using `useMemo` rather than sending filter params to the API. JSON Server supports `q` and query params, but client-side filtering is simpler, avoids extra network requests, and works well for small datasets.

**Alternative considered**: Server-side filtering via JSON Server query params — rejected because all recipes are already cached by RTK Query, and adding query param variations would create multiple cache entries.

### 2. Add `getCategories` endpoint to existing `recipesApi` slice

Extend the existing `recipesApi` with a new `getCategories` query endpoint rather than creating a separate API slice. Both endpoints share the same base URL and belong to the same domain.

### 3. Local component state for filter values

Use `useState` for search text and selected category. These are ephemeral UI states that don't need to live in Redux.

**Alternative considered**: Redux slice for filter state — rejected as over-engineering for local-only UI state with no cross-component consumers.

### 4. `RecipeFilterBar` as a dedicated component

Extract the search input and category dropdown into a `RecipeFilterBar` component in `features/recipes/`. Keeps `RecipeList` focused on data fetching and layout.

## Risks / Trade-offs

- **[Client-side filtering won't scale]** → Acceptable for current dataset size (<100 recipes). Can migrate to server-side later if needed.
- **[Categories endpoint fails independently]** → Show the filter bar without the category dropdown (graceful degradation), or show "all categories" as the only option.
