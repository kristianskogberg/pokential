/*
    _ = neutral
    H = not very effective
    2 = super effective
  */
const _ = 1;
const H = 1 / 2;
const typeTable = [
  [_, _, _, _, _, _, _, _, _, _, _, _, H, 0, _, _, H, _],
  [_, H, H, _, 2, 2, _, _, _, _, _, 2, H, _, H, _, 2, _],
  [_, 2, H, _, H, _, _, _, 2, _, _, _, 2, _, H, _, _, _],
  [_, _, 2, H, H, _, _, _, 0, 2, _, _, _, _, H, _, _, _],
  [_, H, 2, _, H, _, _, H, 2, H, _, H, 2, _, H, _, H, _],
  [_, H, H, _, 2, H, _, _, 2, 2, _, _, _, _, 2, _, H, _],
  [2, _, _, _, _, 2, _, H, _, H, H, H, 2, 0, _, 2, 2, H],
  [_, _, _, _, 2, _, _, H, H, _, _, _, H, H, _, _, 0, 2],
  [_, 2, _, 2, H, _, _, 2, _, 0, _, H, 2, _, _, _, 2, _],
  [_, _, _, H, 2, _, 2, _, _, _, _, 2, H, _, _, _, H, _],
  [_, _, _, _, _, _, 2, 2, _, _, H, _, _, _, _, 0, H, _],
  [_, H, _, _, 2, _, H, H, _, H, 2, _, _, H, _, 2, H, H],
  [_, 2, _, _, _, 2, H, _, H, 2, _, 2, _, _, _, _, H, _],
  [0, _, _, _, _, _, _, _, _, _, 2, _, _, 2, _, H, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, 2, _, H, 0],
  [_, _, _, _, _, _, H, _, _, _, 2, _, _, 2, _, H, _, H],
  [_, H, H, H, _, 2, _, _, _, _, _, _, 2, _, _, _, H, 2],
  [_, H, _, _, _, _, 2, H, _, _, _, _, _, _, 2, 2, H, _],
];

const typesInOrder = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

export const calculateTypeEffectivenesses = (typeArray) => {
  const weak4x = [];
  const weak2x = [];
  const neutral1x = [];
  const resist05x = [];
  const resist025x = [];
  const immune0x = [];

  let type1 = null;
  let type2 = null;
  type1 = typeArray[0].type.name;
  if (typeArray.length === 2) {
    type2 = typeArray[1].type.name;
  }

  const type1Index = typesInOrder.indexOf(type1);

  const type1Multipliers = [];

  for (let i = 0; i < typeTable.length; i++) {
    type1Multipliers.push(typeTable[i][type1Index]);
  }

  if (type2 == null) {
    for (let i = 0; i < type1Multipliers.length; i++) {
      const multiplier = type1Multipliers[i];
      if (multiplier > 1 && multiplier <= 2) {
        weak2x.push(typesInOrder[i]);
      } else if (multiplier > 2) {
        weak4x.push(typesInOrder[i]);
      } else if (multiplier < 1 && multiplier >= 0.5) {
        resist05x.push(typesInOrder[i]);
      } else if (multiplier < 0.5 && multiplier > 0) {
        resist025x.push(typesInOrder[i]);
      } else if (multiplier === 0) {
        immune0x.push(typesInOrder[i]);
      } else if (multiplier === 1) {
        neutral1x.push(typesInOrder[i]);
      }
    }
  } else {
    const type2Multipliers = [];
    const type2Index = typesInOrder.indexOf(type2);
    for (let i = 0; i < typeTable.length; i++) {
      type2Multipliers.push(typeTable[i][type2Index]);
    }

    for (let i = 0; i < type1Multipliers.length; i++) {
      const multiplier = type1Multipliers[i] * type2Multipliers[i];

      if (multiplier > 1 && multiplier <= 2) {
        weak2x.push(typesInOrder[i]);
      } else if (multiplier > 2) {
        weak4x.push(typesInOrder[i]);
      } else if (multiplier < 1 && multiplier >= 0.5) {
        resist05x.push(typesInOrder[i]);
      } else if (multiplier < 0.5 && multiplier > 0) {
        resist025x.push(typesInOrder[i]);
      } else if (multiplier === 0) {
        immune0x.push(typesInOrder[i]);
      } else if (multiplier === 1) {
        neutral1x.push(typesInOrder[i]);
      }
    }
  }

  return {
    weak4x: weak4x,
    weak2x: weak2x,
    neutral1x: neutral1x,
    resist05x: resist05x,
    resist025x: resist025x,
    immune0x: immune0x,
  };
};
