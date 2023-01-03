import React from "react";

export default function DefaultCard({ title }) {
  return (
    <div className="bg-[white] rounded-2xl p-4 w-full grid grid-cols-1 mx-auto my-4 gap-4 ">
      <div className="flex flex-row items-start gap-4 border-b pb-1">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
