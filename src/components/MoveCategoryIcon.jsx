import React from "react";
import SpecialIcon from "../assets/category-icons/special.png";
import PhysicalIcon from "../assets/category-icons/physical.png";
import StatusIcon from "../assets/category-icons/status.png";

export default function MoveCategoryIcon({ category }) {
  function getCategoryIcon(category) {
    switch (category) {
      case "physical":
        return (
          <img
            src={PhysicalIcon}
            alt="physical category"
            className="h-[20px] "
          />
        );
      case "special":
        return (
          <img src={SpecialIcon} alt="special category" className="h-[20px] " />
        );
      case "status":
        return (
          <img src={StatusIcon} alt="status category" className="h-[20px] " />
        );
    }
  }
  return <>{getCategoryIcon(category)}</>;
}
