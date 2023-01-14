import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "layouts";
import { AppRoutes } from "routes";

export const Router = () => {
  // Rendering routes
  const renderAppRoutes = () => AppRoutes.map((route) => <Route key={route.path} path={route.path} element={<route.component />} />);

  return (
    <Routes>
      <Route element={<MainLayout />}>{renderAppRoutes()}</Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
