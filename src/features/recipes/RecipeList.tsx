import { useMemo, useState } from "react";
import { useGetRecipesQuery } from "../../store/api/recipesApi";
import { RecipeCard } from "./RecipeCard";
import { RecipeFilterBar } from "./RecipeFilterBar";

export function RecipeList() {
  const { data: recipes, isLoading, isError } = useGetRecipesQuery();
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredRecipes = useMemo(() => {
    if (!recipes) return [];
    return recipes.filter((recipe) => {
      const search = searchText.toLowerCase();
      const matchesSearch =
        !search ||
        recipe.name.toLowerCase().includes(search) ||
        recipe.description.toLowerCase().includes(search);
      const matchesCategory =
        !selectedCategory || recipe.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [recipes, searchText, selectedCategory]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20">
        <p className="text-red-600 text-lg">
          Error al cargar las recetas. Verifica que el servidor esté corriendo.
        </p>
      </div>
    );
  }

  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">No hay recetas disponibles.</p>
      </div>
    );
  }

  const hasActiveFilters = searchText !== "" || selectedCategory !== "";

  return (
    <div>
      <RecipeFilterBar
        searchText={searchText}
        onSearchChange={setSearchText}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <p className="text-sm text-gray-500 mb-4">
        {filteredRecipes.length} recetas encontradas
      </p>
      {filteredRecipes.length === 0 && hasActiveFilters ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No se encontraron recetas con los filtros seleccionados.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
