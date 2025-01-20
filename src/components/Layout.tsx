import React, { useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { Link, useLocation } from 'react-router-dom'
import { NavigationProps } from '../types'
import { useAuth } from '../hooks/useAuth'
import { Logo } from './'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation: NavigationProps[] = [
  { name: 'Home', href: '/', current: false },
  { name: 'Programs', href: '/programs', current: false },
  { name: 'Workouts', href: '/workouts', current: false },
  { name: 'Exercises', href: '/exercises', current: false }
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#', action: true }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navigation = ({ navigation }: { navigation: NavigationProps[] }) => {
  return (
    <nav className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          aria-current={item.current ? 'page' : undefined}
          className={classNames(
            item.current ? 'text-white border-b-2 border-indigo-400' : 'text-gray-300 hover:text-indigo-400',
            'px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out'
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

const Header = ({ user, onClick }: { user: User; onClick: () => void }) => {
  const location = useLocation()

  const updatedNavigation = useMemo(() => {
    return navigation.map((item) => ({
      ...item,
      current: location.pathname === item.href
    }))
  }, [location.pathname])

  return (
    <div className="bg-gray-800 pb-32">
      <Disclosure as="nav" className="bg-gray-800 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <Logo />
            </div>

            <Navigation navigation={updatedNavigation} />

            <div className="hidden md:flex items-center">
              <div className="flex md:ml-4 md:shrink-0 md:items-center gap-x-4">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>

                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={onClick}
                >
                  <span className="absolute -inset-1.5" />
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
                  </svg>{' '}
                </button>

                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img alt="" src={user?.image_url} className="size-8 rounded-full" />
                    </MenuButton>
                  </div>
                </Menu>
              </div>
            </div>

            <div className="-ml-2 mr-2 flex items-center md:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {updatedNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium group-data-[open]:hidden'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5 sm:px-6">
              <div className="shrink-0">
                <img alt="" src={user?.image_url} className="size-10 rounded-full" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">{user?.name}</div>
                <div className="text-sm font-medium text-gray-400">{user?.email}</div>
              </div>
              <button
                type="button"
                className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2 sm:px-3">
              {userNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  onClick={item.action ? onClick : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}

export const Layout: React.FC = () => {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-full">
      <Header user={user} onClick={logout} />

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
