import { Hero, FeaturedProducts } from "@/components";
// import type { ProductsResponse } from "@/utils";
// import { useLoaderData } from "react-router-dom";

export default function Landing() {
  // const result = useLoaderData() as ProductsResponse;
  // console.log(result);
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}
