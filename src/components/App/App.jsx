import { Suspense, lazy } from "react";
import { Routes, Route, Outlet } from "react-router";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
function App() {
  return (
    <>
      <Suspense fallback={<div>Loader</div>}>
        <Routes>
          <Route index element={<HomePage />}></Route>
        </Routes>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
