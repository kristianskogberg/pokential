export const getGenerationsForPokemon = (firstGenAppeared) => {
  const formatGenerationNames = {
    "generation-i": "Red, Blue, Yellow",
    "generation-ii": "Gold, Silver, Crystal",
    "generation-iii": "Ruby/Sapphire, Emerald, FireRed/LeafGreen",
    "generation-iv": "Diamond/Pearl, Platinum, Heartgold/Soulsilver",
    "generation-v": "Black/White, Black 2/White 2",
    "generation-vi": "X/Y, Omega Ruby/Alpha Sapphire",
    "generation-vii": "Sun/Moon (Ultra), Let's go Eevee & Pikachu",
    "generation-viii":
      "Sword, Shield, Brilliant Diamond, Shining Pearl, Legends: Arceus",
  };
  //let possibleGenerations = [];

  const possibleGenerations = [];
  let nextGen = firstGenAppeared;
  if (nextGen == "generation-i") {
    possibleGenerations.push({
      generation: "Generation 1",
      games: [
        {
          name: "Red/Blue",
          id: "red-blue",
        },
        {
          name: "Yellow",
          id: "yellow",
        },
      ],
    });
    nextGen = "generation-ii";
  }
  if (nextGen == "generation-ii") {
    possibleGenerations.push({
      generation: "Generation 2",
      games: [
        {
          name: "Gold/Silver",
          id: "gold-silver",
        },
        {
          name: "Crystal",
          id: "crystal",
        },
      ],
    });
    nextGen = "generation-iii";
  }
  if (nextGen == "generation-iii") {
    possibleGenerations.push({
      generation: "Generation 3",
      games: [
        {
          name: "Ruby/Sapphire",
          id: "ruby-sapphire",
        },
        {
          name: "Emerald",
          id: "emerald",
        },
        {
          name: "FireRed/LeafGreen",
          id: "firered-leafgreen",
        },
      ],
    });
    nextGen = "generation-iv";
  }
  if (nextGen == "generation-iv") {
    possibleGenerations.push({
      generation: "Generation 4",
      games: [
        {
          name: "Diamond/Pearl",
          id: "diamond-pearl",
        },
        {
          name: "Platinum",
          id: "platinum",
        },
        {
          name: "HeartGold/SoulSilver",
          id: "heartgold-soulsilver",
        },
      ],
    });
    nextGen = "generation-v";
  }
  if (nextGen == "generation-v") {
    possibleGenerations.push({
      generation: "Generation 5",
      games: [
        {
          name: "Black/White",
          id: "black-white",
        },
        {
          name: "Black 2/White 2",
          id: "black-2-white-2",
        },
      ],
    });
    nextGen = "generation-vi";
  }
  if (nextGen == "generation-vi") {
    possibleGenerations.push({
      generation: "Generation 6",
      games: [
        {
          name: "X/Y",
          id: "x-y",
        },
        {
          name: "Omega Ruby/Alpha Sapphire",
          id: "omega-ruby-alpha-sapphire",
        },
      ],
    });
    nextGen = "generation-vii";
  }
  if (nextGen == "generation-vii") {
    possibleGenerations.push({
      generation: "Generation 7",
      games: [
        {
          name: "Sun/Moon",
          id: "sun-moon",
        },
        {
          name: "Ultra Sun/Ultra Moon",
          id: "ultra-sun-ultra-moon",
        },
        {
          name: "Let's Go Pikachu/Eevee",
          id: "lets-go-pikachu-lets-go-eevee",
        },
      ],
    });
    nextGen = "generation-viii";
  }
  if (nextGen == "generation-viii") {
    possibleGenerations.push({
      generation: "Generation 8",
      games: [
        {
          name: "Sword/Shield",
          id: "sword-shield",
        },
        {
          name: "Brilliant Diamond/Shining Pearl",
          id: "brilliant-diamond-shining-pearl",
        },
        {
          name: "Legends: Arceus",
          id: "legends-arceus",
        },
      ],
    });
  }

  return possibleGenerations;
};
