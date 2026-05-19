import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Cart() {
  return (
    <div>
      <h1 className="text-4xl">Cart Page</h1>
      <Button asChild size={"lg"}>
        <Link to="/">home button</Link>
      </Button>
    </div>
  );
}
