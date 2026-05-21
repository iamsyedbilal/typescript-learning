import { customFetch, type ProductsResponseWithParams } from "../utils";
import { type LoaderFunction } from "react-router-dom";

const url = "/products";

export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch<ProductsResponseWithParams>(url, {
    params,
  });
  return { ...response.data, params };
};
