import { useEffect, useState } from 'react'

interface SearchInputProps {
  onChange: (value: string) => void
  label?: string
  hotKey?: string
}

export const SearchInput = ({
  label = 'Search',
  hotKey = '⌘K',
  onChange
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(inputValue);
    }, 1000);

    return () => clearTimeout(handler);
  }, [inputValue, onChange]);

  return (
    <div className="w-full max-w-md">
      <label htmlFor="query" className="sr-only block text-sm/6 font-medium text-neutral-900">
        {label}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md bg-white border border-neutral-300 focus-within:border-primary-500 transition-colors">
          <input
            id="search"
            name="search"
            placeholder={label}
            type="text"
            className="col-start-1 row-start-1 block w-full rounded-l-md bg-white py-1.5 pr-3 pl-4 text-base text-neutral-900 placeholder:text-neutral-400 focus-ring"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="flex-center py-1.5 pr-1.5">
            <kbd className="inline-flex items-center rounded-sm border border-neutral-200 px-1 font-sans text-xs text-neutral-400">
              {hotKey}
            </kbd>
          </div>
        </div>
      </div>
    </div>
  )
}
