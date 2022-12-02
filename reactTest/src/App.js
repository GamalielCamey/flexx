import {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fauser, faX} from "@fortawesome/free-solid-svg-icons";
import CardsList from "./components/cards-list/cards-list.component";
import SearchBar from "./components/searchBar/searchBar.component";

function App() {
  const [products, setProducts] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  function handleChange(e) {
    e.preventDefault(e);
    setSearchString(e.target.value.toLowerCase());
  }

  function clearSearch(e) {
    e.preventDefault(e);
    setFilteredProducts(products);
    setSearchString("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(searchString);
    });
    setFilteredProducts(filtered);
  }

  async function getProducts() {
    return await fetch("products.json")
      .then((response) => response.json())
      .then((products) => setProducts(products.data));
  }

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 3000);
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="flex flex-col justify-center py-10">
      <div className="ml-44 w-3/4 flex flex-wrap items-center justify-between rounded-r-lg bg-black text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      <br />
      {!searchString ? null : (
        <div className="relative ml-44 w-fit px-3 rounded-full text-white shadow-lg bg-black">
          <p>
            {searchString}
            <button onClick={(e) => clearSearch(e)}>
              <FontAwesomeIcon
                className="sticky right-0 h-3 ml-2 hover:bg-gray-700 hover:shadow-lg hover:h-4"
                icon={faX}
              />
            </button>
          </p>
        </div>
      )}

      {products.length ? (
        <div className="flex flex-nowrap justify-center ">
          <CardsList filtered={filteredProducts} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <div className="ml-44 w-fit px-3 rounded-r-lg text-gray-800 shadow-lg bg-gray-200">
        <p>{products.length} resultados</p>
      </div>
    </div>
  );
}

export default App;
