### Requirement: Recipe list displays all recipes as cards
The system SHALL fetch all recipes from `GET /recipes` and display each recipe as a card in a responsive grid layout. When search or category filters are active, only matching recipes SHALL be displayed.

#### Scenario: Recipes load successfully
- **WHEN** the user visits the main page
- **THEN** the system fetches recipes from the API and displays a grid of recipe cards

#### Scenario: Empty recipe list
- **WHEN** the API returns an empty array
- **THEN** the system displays a message indicating no recipes are available

#### Scenario: No recipes match active filters
- **WHEN** recipes exist but no recipes match the current search text and/or category filter
- **THEN** the system displays a filtered empty state distinct from the "no recipes exist" state

### Requirement: Recipe card shows key information
Each recipe card SHALL display the recipe's image, name, category, difficulty level, and preparation time.

#### Scenario: Card displays all fields
- **WHEN** a recipe card is rendered with complete data
- **THEN** the card shows the recipe image, name, category badge, difficulty indicator, and preparation time

#### Scenario: Card with missing image
- **WHEN** a recipe has no image URL or the image field is empty
- **THEN** the card displays a placeholder image

### Requirement: Loading state while fetching recipes
The system SHALL display a loading indicator while recipes are being fetched from the API.

#### Scenario: Initial page load
- **WHEN** the page loads and the API request is in progress
- **THEN** the system displays a loading indicator

#### Scenario: Loading completes
- **WHEN** the API response is received
- **THEN** the loading indicator is replaced with the recipe grid

### Requirement: Error state on API failure
The system SHALL display an error message when the recipe fetch fails.

#### Scenario: API request fails
- **WHEN** the `GET /recipes` request returns an error
- **THEN** the system displays an error message to the user

### Requirement: Data fetching uses RTK Query
The system SHALL use RTK Query with `createApi` to fetch recipe data, with the API slice integrated into the Redux store.

#### Scenario: RTK Query integration
- **WHEN** the application initializes
- **THEN** the RTK Query API slice is registered in the Redux store with its reducer and middleware
