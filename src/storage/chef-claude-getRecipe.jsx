export function GetRecipe(props) {
  return (
    <>
      <div className="generate-recipe-con">
        <div className="generate-text">
          <h5 className="generate-text-header">Ready for a Recipe?</h5>
          <p className="generate-text-text">
            Generate a recipe from your list of ingredients
          </p>
        </div>
        <button
          onClick={() => {
            props.change;
            props.showRecipe;
          }}
          className="generate-button"
        >
          Get a recipe
        </button>
      </div>
    </>
  );
}
