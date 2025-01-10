import React from "react";
import { usePrograms } from "../hooks/usePrograms";
import { ProgramCard, CardWrapper } from "../components";

export const Programs = () => {
  const { programs, loading, error } = usePrograms();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <CardWrapper desktopCols={3}>
      {programs.map((program) => (
        <ProgramCard
          key={program.name}
          handleClick={() => handleClick(program)}
          title={program.name}
          includeFooter={true}
          {...program}
        >
          {/* {program.newCycles.map((cycle, index: number) => (
            <span
              key={program.name + cycle.id}
              className={`cursor-pointer inline-flex items-center rounded-full px-2 py-1 mr-1 text-xs font-medium ring-1 ring-inset ${getCycleClasses(
                cycle.id
              )}`}
              onClick={() => viewProgramCycle(program, cycle)}
            >
              {index + 1}
            </span>
          ))} */}
        </ProgramCard>
      ))}
    </CardWrapper>
  );
};
