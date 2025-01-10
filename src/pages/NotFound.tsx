import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        404
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <div className="mt-10">
        <Link
          to="/"
          className="text-sm font-semibold leading-7 text-indigo-600"
        >
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
      </div>
    </div>
  );
};
