import { Instructions } from "./chef-claude-instructions";
import { List } from "./chef-claude-list.jsx";
import { GetRecipe } from "./chef-claude-getRecipe.jsx";
import { Form } from "./chef.claude-form.jsx";
import { getRecipeFromChefClaude } from "../ai.js";
import React from "react";

export function Input() {
  let [ingredients, setIngredients] = React.useState([]);
  let [recipeShown, setRecipeShown] = React.useState(false);
  let [recipe, setRecipe] = React.useState("");

  function changeShown() {
    setRecipeShown((prevShown) => {
      return (prevShown = !prevShown);
    });
  }
  async function showRecipe() {
    await setRecipe(getRecipeFromChefClaude(props.ingredients));
  }

  return (
    <>
      <div className="big-con">
        <Form key={crypto.randomUUID()} function={setIngredients} />

        <div className="on-hand-con">
          {ingredients.length > 0 ? (
            <h1 className="on-hand-header">Ingredients on hand:</h1>
          ) : null}

          <ul className="ingredients-list">
            <List key={crypto.randomUUID()} ingredients={ingredients} />
          </ul>
        </div>
        {ingredients.length > 3 ? (
          <GetRecipe
            key={crypto.randomUUID()}
            showRecipe={showRecipe}
            change={changeShown}
          />
        ) : null}

        {recipeShown ? (
          <Instructions
            recipe={recipe}
            showRecipe={showRecipe}
            ingredients={ingredients}
            key={crypto.randomUUID()}
          />
        ) : null}
      </div>
    </>
  );
}
