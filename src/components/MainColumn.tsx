import React, { FC, ReactNode } from "react";

interface MainColumnProps {
  title: string;
  subtitle: string;
  poster: string;
  children: ReactNode;
}

export const MainColumn: FC<MainColumnProps> = ({
  title,
  subtitle,
  poster,
  children
}) => (
  <div className="w-full mt-8 lg:mt-0 lg:max-w-lg lg:flex-auto lg:sticky lg:top-16 lg:self-start lg:h-screen">
    <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
      {title}
    </h2>
    <h4 className="text-pretty text-xl tracking-tight text-gray-400">
      {subtitle}
    </h4>
    <img
      alt="Workout main image"
      src={poster}
      className="hidden sm:block mt-8 aspect-[4/3] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
    />
    {children}
  </div>
);
