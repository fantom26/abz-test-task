import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "components/sections";

export const MainLayout = () => (
  <>
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      theme="light"
    />
  </>
);
