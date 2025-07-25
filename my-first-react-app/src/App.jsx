import { recipes } from './data.js';

function Recipe(props){
  return(
    <>
      <div key={props.recipe.id}>
          <h2>{props.recipe.name}</h2>
          <ul>
            {props.recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
    </>
  )
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
          <Recipe recipe={recipe}></Recipe>
      )}
    </div>
  );
}
