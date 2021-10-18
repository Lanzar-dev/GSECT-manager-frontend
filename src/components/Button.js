import React from 'react'
import '../styles/components/button.scss';

export default function Button(props) {
  const { label, action, type = 'primary', icon, width = '220px', stroke  } = props;
  console.log(label);
  let btnclass = 'gsect-button';
  switch (type) {
    case "secondary":
      btnclass = 'gsect-button secondary'
      break;
    case "native":
      btnclass = "gsect-button native"
      break;
    case "inverted":
      btnclass = "gsect-button inverted"
      break;
    case "gray":
      btnclass = "gsect-button gray mb-4"
      break;
    case "blue":
      btnclass = "gsect-button blue mb-4"
      break;
    default:
      btnclass = 'gsect-button'
  }
  return (
    <button className={btnclass} style={{ width: width, border: `1px solid ${stroke}` }} onClick={action}>
      {icon && <img src={icon} className="with-icon" />}
      <span>{label}</span>
    </button>
  )
}
