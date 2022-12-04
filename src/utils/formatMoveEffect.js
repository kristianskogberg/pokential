export const formatMoveEffect = (move) => {
  let effect = "";
  if (move.effect_chance !== null) {
    effect = move.effect_entries[0].short_effect.replace(
      "$effect_chance%",
      move.effect_chance + " %"
    );
  } else {
    effect = move.effect_entries[0].short_effect;
  }

  return effect;
};
