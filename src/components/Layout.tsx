import React, { useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { BellIcon } from '@heroicons/react/24/outline'
import { useUser } from '../hooks/useUser'
import { Link, useLocation } from 'react-router-dom'
import { NavigationProps } from '../types'
import { useAuth } from '../hooks/useAuth'
import { Logo } from './'

const navigation: NavigationProps[] = [
  { name: 'Home', href: '/', current: false },
  { name: 'Programs', href: '/programs', current: false },
  { name: 'Workouts', href: '/workouts', current: false },
  { name: 'Exercises', href: '/exercises', current: false }
]

const Navigation = () => {
  const location = useLocation()

  const updatedNavigation = useMemo(() => {
    return navigation.map((item) => ({
      ...item,
      current: location.pathname === item.href
    }))
  }, [location.pathname])

  return (
    <nav className="hidden md:block flex overflow-x-auto py-4">
      <ul
        role="list"
        className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
      >
        {updatedNavigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`transition-colors duration-200 ease-in-out ${
              item.current ? 'text-indigo-400 border-b-2 border-indigo-400' : 'hover:text-indigo-400'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

const Header = ({ user, onClick }: { user: User; onClick: () => void }) => {
  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 flex justify-between">
        <div className="flex flex-1 items-center gap-x-6">
          {/* <button type="button" onClick={() => {}} className="-m-3 p-3 md:hidden">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-5 w-5 text-gray-900" />
          </button> */}
          <Logo />
        </div>
        <Navigation />
        <div className="flex flex-1 items-center justify-end gap-x-8">
          <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="h-6 w-6" />
          </button>
          <button type="button" onClick={onClick} className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Logout</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m-3-3h8.25m0 0l-3-3m3 3l-3 3"
              />
            </svg>
          </button>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your profile</span>
            <img alt="" src={user?.image_url} className="h-8 w-8 rounded-full bg-gray-800" />
          </a>
        </div>{' '}
      </div>
    </header>
  )
}

export const Layout: React.FC = () => {
  const { user, loading, error } = useUser(1)
  const { logout } = useAuth()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="min-h-full">
      <div className="bg-gray-800 pb-32">
        <Header user={user} onClick={logout} />
      </div>

      <main className="-mt-32">
        <div className="mx-auto max-w-full lg:px-16">
          <div className="rounded-lg bg-white py-6 sm:px-6">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout
