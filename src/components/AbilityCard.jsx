import React from "react";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { Link } from "react-router-dom";

export default function AbilityCard({ ability, isHidden }) {
  return (
    <div className="flex flex-row gap-2">
      <Link
        to={`/ability/${ability}`}
        alt={`${ability} details`}
        className="link"
      >
        {capitalizeFirstLetter(ability)}
      </Link>
      {isHidden ? <p>(Hidden Ability)</p> : null}
    </div>
  );
}
