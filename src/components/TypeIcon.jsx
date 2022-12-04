import React from "react";
import Bug from "../assets/types/bug.svg";
import Dark from "../assets/types/dark.svg";
import Dragon from "../assets/types/dragon.svg";
import Electric from "../assets/types/electric.svg";
import Fairy from "../assets/types/fairy.svg";
import Fighting from "../assets/types/fighting.svg";
import Fire from "../assets/types/fire.svg";
import Flying from "../assets/types/flying.svg";
import Ghost from "../assets/types/ghost.svg";
import Grass from "../assets/types/grass.svg";
import Ground from "../assets/types/ground.svg";
import Ice from "../assets/types/ice.svg";
import Normal from "../assets/types/normal.svg";
import Poison from "../assets/types/poison.svg";
import Psychic from "../assets/types/psychic.svg";
import Rock from "../assets/types/rock.svg";
import Steel from "../assets/types/steel.svg";
import Water from "../assets/types/water.svg";

import { Link } from "react-router-dom";

export default function TypeIcon({ type }) {
  function getTypeIcon(type) {
    switch (type) {
      case "bug":
        return <img src={Bug} alt="bug type" className="h-[35px] " />;

      case "dark":
        return <img src={Dark} alt="dark type" className="h-[35px] " />;

      case "dragon":
        return <img src={Dragon} alt="dragon type" className="h-[35px] " />;

      case "electric":
        return <img src={Electric} alt="electric type" className="h-[35px] " />;

      case "fairy":
        return <img src={Fairy} alt="fairy type" className="h-[35px] " />;

      case "fighting":
        return <img src={Fighting} alt="fighting type" className="h-[35px] " />;

      case "fire":
        return <img src={Fire} alt="fire type" className="h-[35px] " />;

      case "flying":
        return <img src={Flying} alt="flying type" className="h-[35px] " />;

      case "ghost":
        return <img src={Ghost} alt="ghost type" className="h-[35px] " />;

      case "grass":
        return <img src={Grass} alt="grass type" className="h-[35px] " />;

      case "ground":
        return <img src={Ground} alt="ground type" className="h-[35px] " />;

      case "ice":
        return <img src={Ice} alt="ice type" className="h-[35px] " />;

      case "normal":
        return <img src={Normal} alt="normal type" className="h-[35px] " />;

      case "poison":
        return <img src={Poison} alt="poison type" className="h-[35px] " />;

      case "psychic":
        return <img src={Psychic} alt="psychic type" className="h-[35px] " />;

      case "rock":
        return <img src={Rock} alt="rock type" className="h-[35px] " />;

      case "steel":
        return <img src={Steel} alt="steel type" className="h-[35px] " />;

      case "water":
        return <img src={Water} alt="water type" className="h-[35px] " />;

      default:
        return null;
    }
  }
  return <Link to={`/type/${type}`}>{getTypeIcon(type)}</Link>;
}
