import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import { useUser } from "../hooks/useUser";
import { Link, useLocation } from "react-router-dom";

const navigation: { name: string; href: string; current: boolean }[] = [
  { name: "Home", href: "/", current: false },
  { name: "Programs", href: "/programs", current: false },
  { name: "Workouts", href: "/workouts", current: false },
  { name: "Exercises", href: "/exercises", current: false }
];

const Navigation = () => {
  const location = useLocation();

  const updatedNavigation = useMemo(() => {
    return navigation.map((item) => ({
      ...item,
      current: location.pathname === item.href
    }));
  }, [location.pathname]);

  return (
    <nav className="flex overflow-x-auto border-b border-white/10 py-4">
      <ul
        role="list"
        className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
      >
        {updatedNavigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={item.current ? "text-indigo-400" : ""}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

const Header = ({ user }: { user: User }) => {
  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 flex justify-between">
        <div className="flex flex-1 items-center gap-x-6">
          <button
            type="button"
            onClick={() => {}}
            className="-m-3 p-3 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-5 w-5 text-gray-900" />
          </button>
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="h-8 w-auto"
          />
        </div>
        <Navigation />
        <div className="flex flex-1 items-center justify-end gap-x-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="h-6 w-6" />
          </button>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your profile</span>
            <img
              alt=""
              src={user?.image_url}
              className="h-8 w-8 rounded-full bg-gray-800"
            />
          </a>
        </div>{" "}
      </div>
    </header>
  );
};

export const Layout: FC = () => {
  const { user, loading, error } = useUser(1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-full">
      <div className="bg-gray-800 pb-32">
        <Header user={user} />
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
