import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="top-0 z-10 bg-gray-800 md:sticky">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a className="mb-4 font-medium text-white title-font md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Carlos Guerrero
          </a>
        </a>
      </div>
    </header>
  );
}