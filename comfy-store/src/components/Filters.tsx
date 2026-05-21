import { Form, useLoaderData, Link } from "react-router-dom";
import { type ProductsResponseWithParams } from "@/utils";
import { Button } from "@/components/ui/button";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

export default function Filters() {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        defaultValue={search}
      />
      {/* Category */}
      <SelectInput
        name="Category"
        options={meta.categories}
        label="Select Category"
        defaultValue={category}
      />
      {/* Company */}
      <SelectInput
        name="company"
        options={meta.companies}
        label="Select Company"
        defaultValue={company}
      />
      {/* Order */}
      <SelectInput
        name="order"
        options={["a-z", "z-a", "high", "low"]}
        label="order by"
        defaultValue={order}
      />
      <FormRange label="price" name="price" defaultValue={price} />
      <FormCheckbox
        label="free shipping"
        name="shipping"
        defaultValue={shipping}
      />
      <Button type="submit" size="sm" className="self-end mb-2">
        search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="outline"
        className="self-end mb-2">
        <Link to="/products">reset</Link>
      </Button>
    </Form>
  );
}
