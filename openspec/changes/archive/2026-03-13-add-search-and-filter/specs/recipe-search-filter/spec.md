## ADDED Requirements

### Requirement: Text search filters recipes by name and description
The system SHALL provide a text input that filters the displayed recipes. The search SHALL match against recipe name and description fields using case-insensitive substring matching.

#### Scenario: Search matches recipe name
- **WHEN** the user types "tacos" in the search input
- **THEN** only recipes whose name contains "tacos" (case-insensitive) are displayed

#### Scenario: Search matches recipe description
- **WHEN** the user types "cremoso" in the search input
- **THEN** recipes whose description contains "cremoso" (case-insensitive) are displayed

#### Scenario: Search with no matches
- **WHEN** the user types a term that matches no recipes
- **THEN** the system displays a filtered empty state message

#### Scenario: Empty search field
- **WHEN** the search input is cleared
- **THEN** all recipes are displayed (subject to any active category filter)

### Requirement: Category dropdown filters recipes by category
The system SHALL provide a dropdown populated from `GET /categories` that filters recipes by their category field.

#### Scenario: Categories load from API
- **WHEN** the filter bar renders
- **THEN** the category dropdown is populated with categories from the API plus an "all categories" option

#### Scenario: User selects a category
- **WHEN** the user selects "Desayuno" from the dropdown
- **THEN** only recipes with category "Desayuno" are displayed

#### Scenario: User selects all categories
- **WHEN** the user selects the "all categories" option
- **THEN** all recipes are displayed (subject to any active text search)

### Requirement: Filters combine with AND logic
The system SHALL apply both text search and category filter simultaneously using AND logic.

#### Scenario: Combined filters
- **WHEN** the user types "queso" in search AND selects "Snack" as category
- **THEN** only recipes matching both conditions are displayed

#### Scenario: Combined filters with no results
- **WHEN** the combined filters match no recipes
- **THEN** the system displays a filtered empty state message

### Requirement: Result counter displays filtered count
The system SHALL display a counter showing the number of recipes matching the current filters.

#### Scenario: Counter with results
- **WHEN** filters match 3 recipes out of 10 total
- **THEN** the system displays "3 recetas encontradas"

#### Scenario: Counter with all results
- **WHEN** no filters are active
- **THEN** the system displays the total count (e.g., "10 recetas encontradas")
