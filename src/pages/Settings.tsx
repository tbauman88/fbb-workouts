import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Label } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { useAuth } from '../hooks/useAuth'
import { ChevronUpDownIcon } from '@heroicons/react/24/outline'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' }
]

export const Settings = () => {
  const [selected, setSelected] = useState(people[1])

  const { user } = useAuth()

  return (
    <div className="mx-auto max-w-7xl py-16 lg:flex lg:gap-x-16 lg:px-8">
      <h1 className="sr-only">General Settings</h1>

      <section className="px-4 sm:px-6 lg:flex-auto lg:px-0">
        <div className="divide-y divide-white/5">
          {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(userCycle, null, 2)}</pre> */}
          <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 className="text-base/7 font-semibold">Personal Information</h2>
              <p className="mt-1 text-sm/6 text-gray-400">Use a permanent address where you can receive mail.</p>
            </div>

            <form className="md:col-span-2">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div className="col-span-full flex items-center gap-x-8">
                  <img alt="" src={user?.image_url} className="size-24 flex-none rounded-lg bg-gray-800 object-cover" />
                </div>

                <div className="col-span-full">
                  <Listbox value={selected} onChange={setSelected}>
                    <Label className="block text-sm/6 font-medium text-gray-900">Current Program</Label>
                    <div className="relative mt-2">
                      <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                        <span className="col-start-1 row-start-1 truncate pr-6">{selected.name}</span>
                        <ChevronUpDownIcon
                          aria-hidden="true"
                          className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </ListboxButton>

                      <ListboxOptions
                        transition
                        className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                      >
                        {people.map((person) => (
                          <ListboxOption
                            key={person.id}
                            value={person}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                          >
                            <span className="block truncate font-normal group-data-[selected]:font-semibold">
                              {person.name}
                            </span>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                              <CheckIcon aria-hidden="true" className="size-5" />
                            </span>
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </div>
                  </Listbox>
                </div>

                <div className="col-span-full">
                  <label htmlFor="name" className="block text-sm/6 font-medium">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      defaultValue={user?.name}
                      autoComplete="name"
                      className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="email" className="block text-sm/6 font-medium">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      defaultValue={user?.email}
                      autoComplete="email"
                      className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="timezone" className="block text-sm/6 font-medium">
                    Timezone
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="timezone"
                      name="timezone"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-8 text-base outline outline-1 -outline-offset-1 *:bg-gray-800 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    >
                      <option>Pacific Standard Time</option>
                      <option>Eastern Standard Time</option>
                      <option>Greenwich Mean Time</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-500 px-3 py-2 text-sm text-white font-semibold shadow-xs hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 className="text-base/7 font-semibold">Change password</h2>
              <p className="mt-1 text-sm/6 text-gray-400">Update your password associated with your account.</p>
            </div>

            <form className="md:col-span-2">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="current-password" className="block text-sm/6 font-medium">
                    Current password
                  </label>
                  <div className="mt-2">
                    <input
                      id="current-password"
                      name="current_password"
                      type="password"
                      autoComplete="current-password"
                      className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="new-password" className="block text-sm/6 font-medium">
                    New password
                  </label>
                  <div className="mt-2">
                    <input
                      id="new-password"
                      name="new_password"
                      type="password"
                      autoComplete="new-password"
                      className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="confirm-password" className="block text-sm/6 font-medium">
                    Confirm password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirm-password"
                      name="confirm_password"
                      type="password"
                      autoComplete="new-password"
                      className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-500 px-3 py-2 text-sm text-white font-semibold shadow-xs hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 className="text-base/7 font-semibold">Log out other sessions</h2>
              <p className="mt-1 text-sm/6 text-gray-400">
                Please enter your password to confirm you would like to log out of your other sessions across all of
                your devices.
              </p>
            </div>

            <form className="md:col-span-2">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="logout-password" className="block text-sm/6 font-medium">
                    Your password
                  </label>
                  <div className="mt-2">
                    <input
                      id="logout-password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-500 px-3 py-2 text-sm text-white font-semibold shadow-xs hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Log out other sessions
                </button>
              </div>
            </form>
          </div>

          <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 className="text-base/7 font-semibold">Delete account</h2>
              <p className="mt-1 text-sm/6 text-gray-400">
                No longer want to use our service? You can delete your account here. This action is not reversible. All
                information related to this account will be deleted permanently.
              </p>
            </div>

            <form className="flex items-start md:col-span-2">
              <button
                type="submit"
                className="rounded-md bg-red-500 px-3 py-2 text-sm text-white font-semibold shadow-xs hover:bg-red-400"
              >
                Yes, delete my account
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
