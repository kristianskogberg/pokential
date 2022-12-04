import React from "react";

export default function LoadingSpinner() {
  return (
    <div class="flex">
      <div class="relative">
        <div
          class="w-12 h-12 rounded-full absolute
                            border-6 border-solid border-gray-200"
        ></div>

        <div
          class="w-12 h-12 rounded-full animate-spin absolute
                            border-6 border-solid border-purple-500 border-t-transparent"
        ></div>
      </div>
    </div>
  );
}
