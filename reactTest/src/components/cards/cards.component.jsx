function Cards({products}) {
  const {name, code, price, image} = products;

  return (
    <div className="flex flex-col items-center md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <img
          className="object-cover  bg-white border rounded-lg shadow-md w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt={`${name}`}
        />
      </div>
      <div>
        <h3 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {code}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Precio: <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

export default Cards;
