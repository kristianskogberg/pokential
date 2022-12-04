import React from "react";
import { formatStatName } from "../utils/formatStatName";
import { getStatBackgroundColor } from "../utils/getStatBackgroundColor";

export default function StatsCard({ stats }) {
  return (
    <div className="bg-[white] rounded-2xl p-4 w-full grid grid-cols-1 mx-auto my-4">
      <h1 className="text-2xl font-bold border-b pb-2">Stats</h1>
      <div>
        <table className="w-full h-full">
          <tbody>
            {stats.map((stat) => {
              return (
                <tr className="border-b" key={stat.stat.name}>
                  <th className="text-right font-normal py-1 w-[80px] pr-2">
                    {formatStatName(stat.stat.name)}
                  </th>
                  <td className="text-right px-2 w-[40px]">{stat.base_stat}</td>
                  <td>
                    <div
                      style={{
                        width: `${(Number(stat.base_stat) / 180) * 100}%`,
                        backgroundColor: getStatBackgroundColor(
                          Number(stat.base_stat)
                        ),

                        height: "60%",
                        margin: 10,
                        borderRadius: "0.75rem",
                        border: "solid 0.1rem #bbb",
                      }}
                    ></div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
