import React, { FC } from "react";
import { WorkoutItem } from "./WorkoutItem";

interface WorkoutColumnProps {
  workoutItems: unknown[];
}

export const WorkoutColumn: FC<WorkoutColumnProps> = ({ workoutItems }) => (
  <div className="w-full lg:max-w-2xl lg:flex-auto lg:mt-24">
    <ul className="-my-6 divide-y divide-gray-100">
      {workoutItems.map((item) => (
        <WorkoutItem key={item.id} item={item} />
      ))}
    </ul>
  </div>
);
