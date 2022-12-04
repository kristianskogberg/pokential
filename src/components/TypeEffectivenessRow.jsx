import React from "react";
import TypeIcon from "./TypeIcon";

export default function TypeEffectivenessRow({ label, types }) {
  return (
    <div className="flex flex-row items-center border-b">
      <p className="p-1 min-w-[70px] text-right">{label}</p>
      <span className="flex flex-row ml-2 p-2 flex-wrap gap-2">
        {types.map((type) => {
          return <TypeIcon type={type} />;
        })}
      </span>
    </div>
  );
}
