import { useState } from "react";

export function List(props) {
  function items() {
    return props.ingredients.map((ingredient) => {
      return (
        <>
          <li>{ingredient}</li>
        </>
      );
    });
  }

  return <>{items()}</>;
}
