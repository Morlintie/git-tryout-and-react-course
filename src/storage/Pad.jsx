import { padsData } from "../data/pads-data";
import React from "react";
export function Pad(props) {
  return (
    <>
      <button
        className={props.on ? `button-on ` : undefined}
        style={{
          backgroundColor: props.color,
        }}
        onClick={props.toggle}
      ></button>
    </>
  );
}
