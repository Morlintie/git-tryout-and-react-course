export function Form(props) {
  function handleEvent(event) {
    let formData = new FormData(event.currentTarget);
    event.preventDefault();
    let ingredientData = formData.get("ingredient");
    props.function((prevIngredients) => {
      return (prevIngredients = [...prevIngredients, ingredientData]);
    });
    event.currentTarget.reset();
  }

  return (
    <>
      <form onSubmit={handleEvent} className="ingredient-con">
        <input
          className="ingredient-input ingredient-input-js"
          placeholder="e.g. oregano"
          type="text"
          name="ingredient"
        />
        <button className="ingredient-button">&#43; Add ingredient</button>
      </form>
    </>
  );
}
