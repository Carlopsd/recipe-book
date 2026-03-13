## Context

The Recipe Book app has a scaffolded React + TypeScript project with Vite, an empty Redux store, and a placeholder App component. A mock JSON Server API is available at `http://localhost:3001` serving recipe data via `GET /recipes`. The project follows a feature-based architecture (`features/`, `shared/`, `store/`).

## Goals / Non-Goals

**Goals:**
- Fetch and display all recipes from the API using RTK Query
- Present recipes in a responsive card grid layout
- Show key recipe info: image, name, category, difficulty, preparation time
- Handle loading and error states gracefully

**Non-Goals:**
- Recipe detail view (separate future change)
- Filtering, sorting, or search functionality
- Pagination or infinite scroll
- Recipe creation or editing

## Decisions

### 1. RTK Query API slice in `store/api/recipesApi.ts`

Create a dedicated API slice using `createApi` from RTK Query. This follows the project's established pattern and provides automatic caching, loading states, and error handling.

**Alternative considered**: Using `useEffect` + `fetch` directly — rejected because RTK Query is already a project dependency and provides better DX with automatic cache management.

### 2. Feature-based file organization under `features/recipes/`

Place recipe-related components under `src/features/recipes/` following the project's domain-driven architecture convention.

**Alternative considered**: Flat `src/components/` directory — rejected to stay consistent with the `features/` convention defined in the project architecture.

### 3. Tailwind CSS v4 for styling

Use Tailwind utility classes for the card grid and responsive layout. No additional CSS libraries needed.

### 4. Recipe data type defined alongside the API slice

Define a `Recipe` TypeScript interface in the API file since it's the primary consumer. Move to a shared types file later if reused.

## Risks / Trade-offs

- **[Mock API shape mismatch]** → Read `db.json` to confirm the recipe data structure before implementation.
- **[No images in mock data]** → Use a placeholder image fallback if the `image` field is empty or missing.
- **[No error boundary]** → RTK Query's `isError` state with inline error message is sufficient for this scope.
