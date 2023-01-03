import React from "react";
import TypeEffectivenessRow from "./TypeEffectivenessRow";

export default function TypeEffectivenessCard({ typeEffectivenesses }) {
  return (
    <div className="bg-[white] rounded-2xl p-4 w-full grid grid-cols-1 mx-auto my-4">
      <h1 className="text-2xl font-bold border-b pb-2">Type Effectiveness</h1>

      {typeEffectivenesses.weak4x.length ? (
        <TypeEffectivenessRow label="4x" types={typeEffectivenesses.weak4x} />
      ) : null}
      {typeEffectivenesses.weak2x.length ? (
        <TypeEffectivenessRow label="2x" types={typeEffectivenesses.weak2x} />
      ) : null}
      {typeEffectivenesses.neutral1x.length ? (
        <TypeEffectivenessRow
          label="1x"
          types={typeEffectivenesses.neutral1x}
        />
      ) : null}
      {typeEffectivenesses.resist05x.length ? (
        <TypeEffectivenessRow
          label="0.5x"
          types={typeEffectivenesses.resist05x}
        />
      ) : null}
      {typeEffectivenesses.resist025x.length ? (
        <TypeEffectivenessRow
          label="0.25x"
          types={typeEffectivenesses.resist025x}
        />
      ) : null}
      {typeEffectivenesses.immune0x.length ? (
        <TypeEffectivenessRow label="0x" types={typeEffectivenesses.immune0x} />
      ) : null}
    </div>
  );
}
