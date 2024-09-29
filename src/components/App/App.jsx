import { Suspense, lazy } from "react";
import { Routes, Route, Outlet } from "react-router";
import { Spinner } from "../Spinner/Spinner";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const UserPage = lazy(() => import("../../pages/UserPage/UserPage"));
function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
