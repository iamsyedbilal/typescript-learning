import { Outlet } from "react-router-dom";
import { HomeLayout } from "./pages";

export default function App() {
  return (
    <div>
      <HomeLayout />
      <main className="align-element py-6">
        <Outlet />
      </main>
    </div>
  );
}
