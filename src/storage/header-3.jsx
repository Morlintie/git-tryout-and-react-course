import React from "react";

export function Header(props) {
  return (
    <>
      <header className="sibling-header">
        <img
          className="user-icon"
          src="../../Images/user (1).png"
          alt="user icon"
        />
        <p className="name-con">{props.name}</p>
      </header>
    </>
  );
}
