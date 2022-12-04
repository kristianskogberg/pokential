import React, { useState, useEffect, useRef } from "react";
import {
  RiArrowDropDownLine as DownArrow,
  RiArrowDropUpLine as UpArrow,
} from "react-icons/ri";

export default function DropdownPokemonForm({
  forms,
  selectGame,
  selectedForm,
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  function toggle() {
    setOpen(!open);
  }

  function handleClick({ name, id }) {
    selectGame({ name, id });

    //setGame({ name: name, id: id });
    setOpen(!open);
  }
  return (
    <div ref={menuRef} className="flex flex-col w-[175px] z-2">
      <div
        className="flex flex-row cursor-pointer justify-between px-2 py-1 rounded-xl border-2"
        onClick={() => toggle(!open)}
      >
        <p>{selectedForm}</p>
        {open ? <UpArrow size={25} /> : <DownArrow size={25} />}
      </div>
      {open && (
        <div className="relative">
          <div className="absolute bg-[white] max-h-[300px] rounded-lg overflow-auto top-1 shadow-xl w-full">
            {forms.map((form) => {
              return (
                <div className="flex flex-col" key={form.pokemon.name}>
                  <span
                    className="cursor-pointer w-full p-2 hover:bg-gray-200"
                    //onClick={() => handleClick({ form, id })}
                    key={form.pokemon.name}
                  >
                    {form.pokemon.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
