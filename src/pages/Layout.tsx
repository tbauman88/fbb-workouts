import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Outlet } from "react-router-dom";

export const Layout: React.FC<{
  name: string;
  handleClick?: (direction: "next" | "prev") => void;
}> = ({ name, handleClick = () => {} }) => {
  return (
    <div className="min-h-full">
      <div className="bg-gray-800 pb-32">
        <header className="py-10">
          <div className="mx-auto max-w-7xl px-4 flex justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              {name}
            </h1>

            <div className="flex items-center text-gray-400">
              <button
                type="button"
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 hover:text-white"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                  onClick={() => handleClick("prev")}
                />
              </button>
              <button
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 hover:text-white"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                  onClick={() => handleClick("next")}
                />
              </button>
            </div>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="mx-auto max-w-full lg:px-16">
          <div className="rounded-lg bg-white lg:py-6 sm:px-6">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
