## MODIFIED Requirements

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
