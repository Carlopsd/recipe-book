import { useGetRecipesQuery } from "../../store/api/recipesApi";
import { RecipeCard } from "./RecipeCard";

export function RecipeList() {
  const { data: recipes, isLoading, isError } = useGetRecipesQuery();

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
