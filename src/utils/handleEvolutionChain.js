import { current } from "@reduxjs/toolkit";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

const formatMethod = {
  "level-up": "Level ",
  "use-item": "Use a ",
  trade: "Trade ",
  "three-critical-hits": "Land 3 Critical Hits in the same battle",
};

const formatTimeOfDay = {
  night: " (Nighttime)",
  day: " (Daytime)",
};

function getEvolutionMethod(evolutionDetails) {
  let evolutionMethod = null;
  console.log(evolutionDetails);

  if (evolutionDetails.length > 0) {
    if (evolutionDetails[0].item !== null) {
      evolutionMethod =
        formatMethod[evolutionDetails[0].trigger.name] +
        capitalizeFirstLetter(evolutionDetails[0].item.name);
    } else if (evolutionDetails[0].held_item !== null) {
      var vowelRegex = "^[aieouAIEOU].*";
      let article = "";

      //console.log(evolutionDetails[0].held_item.name[0]);
      if (evolutionDetails[0].held_item.name.match(vowelRegex)) {
        article = "an ";
      } else {
        article = "a ";
      }
      evolutionMethod =
        formatMethod[evolutionDetails[0].trigger.name] +
        "holding " +
        article +
        capitalizeFirstLetter(evolutionDetails[0].held_item.name);
    } else if (evolutionDetails[0].min_level !== null) {
      evolutionMethod =
        formatMethod[evolutionDetails[0].trigger.name] +
        evolutionDetails[0].min_level +
        "+";
    } else if (evolutionDetails[0].held_item !== null) {
      evolutionMethod =
        formatMethod[evolutionDetails[0].trigger.name] +
        capitalizeFirstLetter(evolutionDetails[0].held_item.name);
    } else if (evolutionDetails[0].min_happiness !== null) {
      evolutionMethod = "High friendship";
    } else if (evolutionDetails[0].trigger.name == "trade") {
      evolutionMethod = formatMethod[evolutionDetails[0].trigger.name];
    } else if (evolutionDetails[0].trigger.name == "three-critical-hits") {
      evolutionMethod = formatMethod[evolutionDetails[0].trigger.name];
    }

    if (evolutionDetails[0].gender != null) {
      if (evolutionDetails[0].gender === 1) {
        evolutionMethod += " (Female)";
      } else if (evolutionDetails[0].gender === 2) {
        evolutionMethod += " (Male)";
      }
    }

    if (evolutionDetails[0].time_of_day != "") {
      evolutionMethod += formatTimeOfDay[evolutionDetails[0].time_of_day];
    }
    if (evolutionDetails[0].turn_upside_down) {
      evolutionMethod += " (holding console upside down)";
    }

    if (evolutionDetails[0].known_move_type != null) {
      evolutionMethod = ` After learning a ${capitalizeFirstLetter(
        evolutionDetails[0].known_move_type.name
      )}-type move`;
    }
  }

  return evolutionMethod;
}

function getPokemonNumberFromUrl(url) {
  return url.substring(42, url.length - 1);
}

export const handleEvolutionChain = (chain) => {
  let evoChain = [];
  let evoData = chain;

  // console.log("handling evolution chain", evoData);

  do {
    let numberOfEvolutions = evoData.evolves_to.length;

    evoChain.push({
      name: evoData.species.name,

      method: getEvolutionMethod(evoData.evolution_details),

      id: getPokemonNumberFromUrl(evoData.species.url),
      evolutions: null,
    });

    if (numberOfEvolutions > 0) {
      const evolutions = [];
      for (let i = 0; i < numberOfEvolutions; i++) {
        evolutions.push({
          name: evoData.evolves_to[i].species.name,
          method: getEvolutionMethod(evoData.evolves_to[i].evolution_details),
          id: getPokemonNumberFromUrl(evoData.evolves_to[i].species.url),
          evolutions: null,
        });

        if (evoData.evolves_to[i].evolves_to.length > 0) {
          const secondEvolutions = [];
          for (let i = 0; i < evoData.evolves_to[0].evolves_to.length; i++) {
            //console.log(evoData.evolves_to[0].evolves_to[i]);

            secondEvolutions.push({
              name: evoData.evolves_to[0].evolves_to[i].species.name,
              method: getEvolutionMethod(
                evoData.evolves_to[0].evolves_to[i].evolution_details
              ),
              id: getPokemonNumberFromUrl(
                evoData.evolves_to[0].evolves_to[i].species.url
              ),
              evolutions: null,
            });
          }
          evolutions[evoChain.length - 1].evolutions = secondEvolutions;
        }
      }
      evoChain[evoChain.length - 1].evolutions = evolutions;
      //console.log("evolutions: ", evoChain[evoChain.length - 1]);
    }

    evoData = evoData.evolves_to[0];
  } while (evoData != undefined && evoData.hasOwnProperty("evolves_to"));

  const finalEvolutionChain = [evoChain[0]];
  // console.log("finalEvolutionChain: ", finalEvolutionChain);
  return finalEvolutionChain;
};
