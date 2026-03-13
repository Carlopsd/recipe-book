import type { Recipe } from "../../store/api/recipesApi";

const PLACEHOLDER_IMAGE = "https://placehold.co/400x300?text=Sin+Imagen";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const imageUrl = recipe.imageUrl || PLACEHOLDER_IMAGE;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imageUrl}
        alt={recipe.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE;
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{recipe.name}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {recipe.category}
          </span>
          <span className="inline-block bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {recipe.difficulty}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-500">{recipe.prepTime} min</p>
      </div>
    </div>
  );
}
