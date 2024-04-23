import { Suspense, lazy } from "react";
import { Routes, Route, Outlet } from "react-router";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const UserPage = lazy(() => import("../../pages/UserPage/UserPage"));
function App() {
  return (
    <>
      <Suspense fallback={<div>Loader</div>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
