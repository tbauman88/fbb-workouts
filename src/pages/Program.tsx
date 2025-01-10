import React from "react";
import { useParams } from "react-router-dom";

export const Program = () => {
  const { id } = useParams();

  return (
    <div className="mx-auto max-w-7xl px-4">
      <h1 className="text-2xl font-semibold text-gray-900">Program {id}</h1>
      <p className="mt-4 text-gray-500">Coming soon...</p>
    </div>
  );
};
