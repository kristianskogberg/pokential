import React from "react";
import Bug from "../assets/tm-hm/bug.svg";
import Dark from "../assets/tm-hm/dark.svg";
import Dragon from "../assets/tm-hm/dragon.svg";
import Electric from "../assets/tm-hm/electric.svg";
import Fairy from "../assets/tm-hm/fairy.svg";
import Fighting from "../assets/tm-hm/fighting.svg";
import Fire from "../assets/tm-hm/fire.svg";
import Flying from "../assets/tm-hm/flying.svg";
import Ghost from "../assets/tm-hm/ghost.svg";
import Grass from "../assets/tm-hm/grass.svg";
import Ground from "../assets/tm-hm/ground.svg";
import Ice from "../assets/tm-hm/ice.svg";
import Normal from "../assets/tm-hm/normal.svg";
import Poison from "../assets/tm-hm/poison.svg";
import Psychic from "../assets/tm-hm/psychic.svg";
import Rock from "../assets/tm-hm/rock.svg";
import Steel from "../assets/tm-hm/steel.svg";
import Water from "../assets/tm-hm/water.svg";

export default function TMIcon({ type }) {
  function getTypeIcon(type) {
    switch (type) {
      case "bug":
        return <img src={Bug} alt="bug type" className="h-[50px] w-full" />;

      case "dark":
        return <img src={Dark} alt="dark type" className="h-[50px] w-full" />;

      case "dragon":
        return (
          <img src={Dragon} alt="dragon type" className="h-[50px] w-full" />
        );

      case "electric":
        return (
          <img src={Electric} alt="electric type" className="h-[50px] w-full" />
        );

      case "fairy":
        return <img src={Fairy} alt="fairy type" className="h-[50px] w-full" />;

      case "fighting":
        return (
          <img src={Fighting} alt="fighting type" className="h-[50px] w-full" />
        );

      case "fire":
        return <img src={Fire} alt="fire type" className="h-[50px] w-full" />;

      case "flying":
        return (
          <img src={Flying} alt="flying type" className="h-[50px] w-full" />
        );

      case "ghost":
        return <img src={Ghost} alt="ghost type" className="h-[50px] w-full" />;

      case "grass":
        return <img src={Grass} alt="grass type" className="h-[50px] w-full" />;

      case "ground":
        return (
          <img src={Ground} alt="ground type" className="h-[50px] w-full" />
        );

      case "ice":
        return <img src={Ice} alt="ice type" className="h-[50px] w-full" />;

      case "normal":
        return (
          <img src={Normal} alt="normal type" className="h-[50px] w-full" />
        );

      case "poison":
        return (
          <img src={Poison} alt="poison type" className="h-[50px] w-full" />
        );

      case "psychic":
        return (
          <img src={Psychic} alt="psychic type" className="h-[50px] w-full" />
        );

      case "rock":
        return <img src={Rock} alt="rock type" className="h-[50px] w-full" />;

      case "steel":
        return <img src={Steel} alt="steel type" className="h-[50px] w-full" />;

      case "water":
        return <img src={Water} alt="water type" className="h-[50px] w-full" />;

      default:
        return null;
    }
  }
  return <div>{getTypeIcon(type)}</div>;
}
