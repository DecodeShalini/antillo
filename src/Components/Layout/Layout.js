import react from "react";
import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="background">
      <div className="container main-container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
