import { Filter, PaginationContainer, ProductsContainer } from "../components";

export default function Products() {
  return (
    <div>
      <Filter />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
}
