import Cards from "../cards/cards.component";

function CardsList({filtered}) {
  const productList = filtered;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 p-5">
      {productList?.map((product) => (
        <Cards products={product} />
      ))}
    </div>
  );
}

export default CardsList;
