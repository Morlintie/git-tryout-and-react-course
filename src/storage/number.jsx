import React from "react";

export function Number(props) {
  return (
    <>
      <button onClick={props.decrease} className="minus-button">
        -
      </button>
      <button className="button-yes">{props.number}</button>
      <button className="plus-button" onClick={props.increase}>
        +
      </button>
    </>
  );
}
