import { CardWrapperProps } from "../types/component";

export const CardWrapper = ({
  children,
  desktopCols = 1
}: CardWrapperProps) => {
  const colsMap = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
    7: "md:grid-cols-7",
    8: "md:grid-cols-8"
  };

  return (
    <section
      role="list"
      className={`grid grid-cols-1 ${colsMap[desktopCols]} gap-x-4 gap-y-8 xl:gap-x-8`}
    >
      {children}
    </section>
  );
};
