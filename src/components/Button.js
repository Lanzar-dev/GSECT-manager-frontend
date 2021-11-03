import React from "react";
import "../styles/components/button.scss";

export default function Button(props) {
  const { label, action, type = "primary" } = props;
  console.log(label);
  let btnclass = "gsect-button";
  switch (type) {
    case "secondary":
      btnclass = "gsect-button secondary";
      break;
    case "native":
      btnclass = "gsect-button native";
      break;
    case "inverted":
      btnclass = "gsect-button inverted";
      break;
    case "facebook":
      btnclass = "gsect-button facebook";
      break;
    default:
      btnclass = "gsect-button";
  }
  return (
    <button className={btnclass} onClick={action}>
      {label}
    </button>
  );
}
