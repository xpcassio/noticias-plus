import { useLocation } from 'react-router-dom';
import IconSearch from '../assets/svg/search.svg?react';
import { useState } from 'react';

export default function SearchBar() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search');
  const [query, setQuery] = useState(searchQuery || '');

  // Faz com que visualmente o input mude
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <form className="bg-gray-100 dark:bg-gray-600 rounded-3xl p-4 mt-4 flex items-center">
      <input
        name="search"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Buscar artigos"
        className="flex-grow bg-transparent border-none outline-none text-gray-800 dark:text-gray-200"
      />
      <button
        type="submit"
        className="cursor-pointer text-white rounded-full p-2 hover:bg-gray-200 hover:dark:bg-gray-400"
      >
        <IconSearch className="w-5 h-5 dark:fill-stone-200" />
      </button>
    </form>
  );
}
