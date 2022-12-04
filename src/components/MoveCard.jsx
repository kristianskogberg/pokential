import React from "react";
import TypeIcon from "./TypeIcon";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import TMIcon from "./TMIcon";

export default function MoveCard({
  name,
  power,
  pp,
  accuracy,
  effect,
  category,
  type,
}) {
  return (
    <tr>
      <td>{capitalizeFirstLetter(name)}</td>

      <td>
        <TypeIcon type={type} className="mx-auto" />
      </td>

      <p>{category}</p>

      {/*
<TMIcon type={type} />
      <p>{power} Power</p>
      <p>{accuracy} Accuracy</p>
      <p>{pp} PP</p>
  <p>{effect}</p> */}
    </tr>
  );
}
