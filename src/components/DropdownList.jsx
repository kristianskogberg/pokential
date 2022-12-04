import React, { useState, useEffect, useRef } from "react";
import {
  RiArrowDropDownLine as DownArrow,
  RiArrowDropUpLine as UpArrow,
} from "react-icons/ri";

export default function DropdownList({ data, selectGame, selectedGame }) {
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
    <div ref={menuRef} className="flex flex-col w-[275px] z-2">
      <div
        className="flex flex-row cursor-pointer justify-between px-2 py-1 rounded-xl border-2"
        onClick={() => toggle(!open)}
      >
        <p>{selectedGame}</p>
        {open ? <UpArrow size={25} /> : <DownArrow size={25} />}
      </div>
      {open && (
        <div className="relative">
          <div className="absolute bg-[white] max-h-[300px] rounded-lg overflow-auto top-1 shadow-xl w-full">
            {data.map(({ generation, games }, key) => (
              <div label={generation} key={key}>
                <p className="font-bold border-y p-2">{generation}</p>
                {games.map(({ name, id }) => (
                  <div className="flex flex-col" key={id}>
                    <span
                      className="cursor-pointer w-full p-2 hover:bg-gray-200"
                      onClick={() => handleClick({ name, id })}
                      key={id}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
