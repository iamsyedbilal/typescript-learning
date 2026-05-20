import { Outlet, useNavigation } from "react-router-dom";
import { HomeLayout } from "./pages";
import { Loading } from "@/components";

export default function App() {
  const navigate = useNavigation();
  const isPageLoading = navigate.state === "loading";
  return (
    <div>
      <HomeLayout />
      <main className="align-element py-6">
        {isPageLoading ? <Loading /> : <Outlet />}
      </main>
    </div>
  );
}
