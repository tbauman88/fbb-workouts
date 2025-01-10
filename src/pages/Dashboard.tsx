import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          to="/programs"
          className="block rounded-lg border border-gray-200 p-4 hover:border-gray-300"
        >
          <h2 className="text-lg font-medium text-gray-900">Programs</h2>
          <p className="mt-2 text-sm text-gray-600">
            View and manage training programs
          </p>
        </Link>
        <Link
          to="/workouts"
          className="block rounded-lg border border-gray-200 p-4 hover:border-gray-300"
        >
          <h2 className="text-lg font-medium text-gray-900">Workouts</h2>
          <p className="mt-2 text-sm text-gray-600">
            Access your daily workouts
          </p>
        </Link>
        <Link
          to="/exercises"
          className="block rounded-lg border border-gray-200 p-4 hover:border-gray-300"
        >
          <h2 className="text-lg font-medium text-gray-900">
            Exercise Library
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Browse exercise demonstrations
          </p>
        </Link>
      </div>
    </div>
  );
};
