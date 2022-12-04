import axios from "axios";

const getSingleMoveOld = async (move) => {
  console.log("getting move: ", move);
  const response = await axios.get(`https://pokeapi.co/api/v2/move/${move}`);
  const data = response.data;

  return data;
};

export const getSingleMove = async ({ queryKey }) => {
  const [_key, { params }] = queryKey;
  console.log("get single move", params.move);

  const response = await axios.get(
    `https://pokeapi.co/api/v2/move/${params.move}`
  );

  return response.data;
};

export const getMoves = async (pageParam) => {
  console.log("fetching moves...");
  const limit = 20;

  const response = await axios.get(
    `https://pokeapi.co/api/v2/move/?limit=${limit}&offset=${limit * pageParam}`
  );
  const data = response.data;

  console.log(data);
  let allMoves = [];

  async function createMoveObject(data) {
    for (const move of data) {
      const moveData = await getSingleMove(move.name);
      allMoves.push(moveData);
    }
  }

  await createMoveObject(data.results);
  console.log("all pokemon: ", allMoves);

  console.log("all moves: ", allMoves);
  return allMoves;
};

export const getSingleType = async ({ queryKey }) => {
  const [_key, { params }] = queryKey;
  console.log("get single type", params.type);

  const response = await axios.get(
    `https://pokeapi.co/api/v2/type/${params.type}`
  );

  return response.data;
};

export const getSinglePokemon = async ({ queryKey }) => {
  const [_key, { params }] = queryKey;
  console.log("get single pokemon", params.pokemon);

  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  );

  //console.log("RESPONSE: ", response.data);

  const speciesResponse = await axios.get(response.data.species.url);
  //console.log("species", speciesResponse.data);

  const evolutionResponse = await axios.get(
    speciesResponse.data.evolution_chain.url
  );

  const firstEvolution = evolutionResponse.data.chain.species.name;

  if (firstEvolution != response.data.name) {
    //get egg moves from the first evolution
    const firstEvolutionResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${firstEvolution}`
    );

    const eggMoves = [];

    for (const move of firstEvolutionResponse.data.moves) {
      eggLoop: for (let i = 0; i < move.version_group_details.length; i++) {
        //if (move.version_group_details[i].version_group.name == game.id) {
        if (move.version_group_details[i].move_learn_method.name == "egg") {
          //console.log("egg moves from first evo", move);
          //Egg move
          response.data.moves.push({
            move: {
              name: move.move.name,
              url: move.move.url,
            },
            version_group_details: move.version_group_details,

            //move.version_group_details
          });
          break eggLoop;
        }
        //}
      }
    }

    //console.log("egg moves from first evo", eggMoves);
  }

  //response.data.moves.push(eggMoves);

  return Object.assign(
    response.data,
    speciesResponse.data,
    evolutionResponse.data
  );
};

export const getPokemon = async (pageParam) => {
  console.log("fetching pokemon...");
  const allPokemon = [];
  const limit = 20;

  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${
      limit * pageParam
    }`
  );
  const data = response.data;

  async function getSinglePokemon(pokemon) {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const data = response.data;

    return data;
  }

  async function createPokemonObject(data) {
    for (const pokemon of data) {
      const pokemonData = await getSinglePokemon(pokemon.name);
      allPokemon.push(pokemonData);
    }
  }

  await createPokemonObject(data.results);
  console.log("all pokemon: ", allPokemon);

  return allPokemon;
};
