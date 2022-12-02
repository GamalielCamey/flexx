import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

function SearchBar(props) {
  const {handleSubmit, handleChange} = props;

  return (
    <div className="relative w-full rounded-r-lg">
      <form onChange={(e) => handleChange(e)}>
        <input
          className="block p-2.5 w-full h-12 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          type="search"
          placeholder="Busqueda"
        ></input>

        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className="absolute top-0 h-12 right-0 p-2.5 text-sm font-medium text-white bg-black rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FontAwesomeIcon className="w-3 h-3 mr-1" icon={faMagnifyingGlass} />
          Buscar
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
