import React from "react";
import "../styles/components/textfield.scss";

export default function TextField({ type, placeholder, value, change }) {
  return (
    <div className="textfield">
      <input
        {...{ value, type, placeholder }}
        onChange={(e) => change(e.target.value)}
        className="textfield"
      />
      {type === "password" && (
        <button className="show-password">
          <img src={require("../assets/images/show.png").default} alt=""/>
        </button>
      )}
    </div>
  );
}
